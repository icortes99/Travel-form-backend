import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { HotelDestinationArgs, HotelDestinationCreateInput, HotelsInDestinationAgencyArgs } from './dto'

import { HotelDestination, HotelDestinationSelect } from './model'

@Injectable()
export class HotelDestinationService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: HotelDestinationArgs,
    { select }: HotelDestinationSelect
  ): Promise<HotelDestination> {
    return this.prismaService.hotelDestination.findUnique({
      where: {
        hotelId_destinationId_travelAgencyId: where
      },
      select
    })
  }

  public async findHotels(
    { where }: HotelsInDestinationAgencyArgs,
    { select }: HotelDestinationSelect
  ): Promise<HotelDestination[]> {
    return this.prismaService.hotelDestination.findMany({
      where: {
        destination: where.destination,
        travelAgency: where.travelAgency
      },
      select
    })
  }

  public async create(
    data: HotelDestinationCreateInput,
    { select }: HotelDestinationSelect
  ): Promise<HotelDestination> {
    return this.prismaService.hotelDestination.create({
      data,
      select
    })
  }
}