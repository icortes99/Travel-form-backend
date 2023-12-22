import { ConflictException, Injectable } from '@nestjs/common'

import { Application, ApplicationSelect } from './model'

import { ApplicationArgs, ApplicationCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import validateAge, { getAge } from 'src/shared/util/refuse-by/age.input'

import { UserService } from '../user/user.service'

import IntegrationManager, { StrategyParams } from '../../shared/integrations'

@Injectable()
export class ApplicationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
    private integrationManager: IntegrationManager
  ) { }

  public async findOne(
    { where }: ApplicationArgs,
    { select }: ApplicationSelect,
  ): Promise<Application> {
    return this.prismaService.application.findUnique({
      where,
      select
    })
  }

  public async create(
    data: ApplicationCreateInput,
    { select }: ApplicationSelect
  ): Promise<Application> {
    if (!data.user) {
      const applicationTemplate = await this.prismaService.application.findFirst({
        where: {
          destinationId: data.destination.connect.id,
          travelAgencyId: data.travelAgency.connect.id
        }
      })

      if (applicationTemplate) {
        throw new ConflictException('This travel agency already supports this destination')
      }
    }

    const existingUserConnect = ((data.user?.connect !== undefined) && await this.userService.findOne({ where: { email: data.user?.connect?.email } }, { select: { id: true } })) ?? null
    const existingUserCreate = ((data.user?.create !== undefined) && await this.userService.findOne({ where: { email: data.user?.create?.email } }, { select: { id: true } })) ?? null

    if ((data.user?.create !== undefined) && existingUserCreate) {
      throw new ConflictException('The user already exist.')
    }

    if ((data.user?.connect !== undefined) && !existingUserConnect) {
      throw new ConflictException('The user is not registered yet.')
    }

    const attractionIDs: (string | number)[] = data.applicationAttractions.create.map(({ attraction }) => (
      attraction.connect.id ?? attraction.connect.uuid
    ))

    const selectedAttractions = await this.prismaService.attraction.findMany({
      where: {
        OR: [
          {
            id: {
              in: attractionIDs.filter((id) => typeof id === 'number') as number[]
            }
          },
          {
            uuid: {
              in: attractionIDs.filter((id) => typeof id === 'string') as string[]
            }
          }
        ]
      },
      select: {
        destination: {
          select: {
            id: true,
            uuid: true,
            name: true
          }
        },
        name: true
      }
    })

    if (selectedAttractions.length !== data.applicationAttractions.create.length) {
      throw new ConflictException('There is an attraction id that does not exist or it is a duplicate of another')
    }

    const wrongDestinationAttractions = selectedAttractions.filter(({ destination: { id, uuid } }) => (
      ((data.destination.connect.id !== undefined) && data.destination.connect.id !== id) ||
      ((data.destination.connect.uuid !== undefined) && data.destination.connect.uuid !== uuid)
    ))

    if (wrongDestinationAttractions.length) {
      throw new ConflictException('There are attractions that are not related to the destination')
    }

    if (data.user) {
      const owner = await this.prismaService.travelAgency.findUnique({
        where: {
          slug: data.travelAgency.connect.slug
        },
        select: {
          owner: {
            select: {
              email: true
            }
          }
        }
      })

      const integrationParams: StrategyParams = {
        email: {
          attractions: selectedAttractions,
          ownerEmail: owner.owner.email
        },
        notion: {
          url: 'https://api.notion.com/v1/pages',
          authToken: 'secret_jn226QSSBjyjdY7fAwBE86XuLsFfKl6xoauJXhS8678',
          databaseId: '220f146bb2af4bf9a5d4954fea29dd56'
        }
      }

      await this.integrationManager.executeIntegrations(['email', 'notion'], data, integrationParams)
    }

    return this.prismaService.application.create({
      data,
      select
    })
  }
}