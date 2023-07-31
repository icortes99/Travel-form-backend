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

    if (data.companions) {
      const limitDate = new Date()

      /*const wrongBirth = data.companions.createMany.data.filter(companion => {
        if (companion.birthdate.getFullYear() > limitDate.getFullYear()) {
          return true
        }
        if ((companion.birthdate.getFullYear() === limitDate.getFullYear()) && (companion.birthdate.getMonth() > limitDate.getMonth())) {
          return true
        }
        if ((companion.birthdate.getFullYear() === limitDate.getFullYear()) && (companion.birthdate.getMonth() === limitDate.getMonth()) && (companion.birthdate.getDate() > limitDate.getDate())) {
          return true
        }
        return false
      })*/
      const wrongBirth = data.companions.createMany.data.filter(companion => !validateAge(companion.birthdate, 0))

      if (wrongBirth.length > 0) {
        throw new BadRequestException('Date not supported')
      }
    }

    return this.prismaService.application.create({
      data,
      select
    })
  }
}