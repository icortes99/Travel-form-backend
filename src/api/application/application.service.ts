import { ConflictException, Injectable } from '@nestjs/common'

import { Application, ApplicationSelect } from './model'

import { ApplicationArgs, ApplicationCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

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
    return this.prismaService.application.create({
      data,
      select
    })
  }
}