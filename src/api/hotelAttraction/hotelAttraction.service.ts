import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { HotelAttractionArgs, HotelAttractionCreateInput } from './dto'

import { HotelAttraction, HotelAttractionSelect } from './model'

@Injectable()
export class HotelAttractionService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: HotelAttractionArgs,
    { select }: HotelAttractionSelect
  ): Promise<HotelAttraction> {
    return this.prismaService.hotelAttraction.findUnique({
      where: {
        hotelId_attractionId: where.hotelId_attractionId
      },
      select
    })
  }

  public async findHotels(
    { where }: HotelAttractionArgs,
    { select }: HotelAttractionSelect
  ): Promise<HotelAttraction[]> {
    return this.prismaService.hotelAttraction.findMany({
      where: {
        attractionId: where.hotelId_attractionId.attractionId,
        hotelId: where.hotelId_attractionId.hotelId
      },
      select
    })
  }

  public async create(
    data: HotelAttractionCreateInput,
    { select }: HotelAttractionSelect
  ): Promise<HotelAttraction> {
    return this.prismaService.hotelAttraction.create({
      data,
      select
    })
  }
}