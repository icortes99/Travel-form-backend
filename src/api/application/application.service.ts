import { BadRequestException, ConflictException, Injectable } from '@nestjs/common'

import { Application, ApplicationSelect } from './model'

import { ApplicationArgs, ApplicationCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import validateAge from 'src/shared/util/refuse-by/age.input'

@Injectable()
export class ApplicationService {
  constructor(private readonly prismaService: PrismaService) { }

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
            uuid: true
          }
        }
      }
    })

    if (selectedAttractions.length !== data.applicationAttractions.create.length) {
      throw new ConflictException('There is an attraction id that does not exist or it is a duplicate of another')
    }

    const wrongDestinationAttractions = selectedAttractions.filter(({ destination: { id, uuid } }) => (
      id !== data.destination.connect.id ?? uuid !== data.destination.connect.uuid
    ))

    if (wrongDestinationAttractions.length) {
      throw new ConflictException('There are attractions that are not related to the destination')
    }

    return this.prismaService.application.create({
      data,
      select
    })
  }
}