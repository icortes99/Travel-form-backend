import { Injectable } from '@nestjs/common/decorators'

import { TravelAgency, TravelAgencySelect } from './model'

import { TravelAgencyArgs, TravelAgencyCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

@Injectable()
export class TravelAgencyService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: TravelAgencyArgs,
    { select: { applications, ...select } }: TravelAgencySelect,
  ): Promise<TravelAgency> {
    return this.prismaService.travelAgency.findUnique({
      where,
      select: {
        ...select,
        applications: applications ? {
          ...applications,
          where: {
            userId: null
          }
        } : undefined
      }
    })
  }

  public async create(
    data: TravelAgencyCreateInput,
    { select }: TravelAgencySelect,
  ): Promise<TravelAgency> {
    return this.prismaService.travelAgency.create({
      data,
      select,
    })
  }
}