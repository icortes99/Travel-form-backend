import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { HotelDestinationArgs, HotelDestinationCreateInput } from './dto'

import { HotelDestination, HotelDestinationSelect } from './model'

@Injectable()
export class HotelDestinationService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: HotelDestinationArgs,
    { select }: HotelDestinationSelect
  ): Promise<HotelDestination> {
    return this.prismaService.hotelDestination.findUnique({
      where,
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