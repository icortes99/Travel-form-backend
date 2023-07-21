import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { HotelArgs, HotelCreateInput } from './dto'

import { Hotel, HotelSelect } from './model'

@Injectable()
export class HotelService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: HotelArgs,
    { select }: HotelSelect
  ): Promise<Hotel> {
    return this.prismaService.hotel.findUnique({
      where,
      select
    })
  }

  public async create(
    data: HotelCreateInput,
    { select }: HotelSelect
  ): Promise<Hotel> {
    return this.prismaService.hotel.create({
      data,
      select
    })
  }
}