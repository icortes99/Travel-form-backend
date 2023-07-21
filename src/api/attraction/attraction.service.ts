import { Injectable } from '@nestjs/common'

import { Attraction, AttractionSelect } from './model'

import { AttractionArgs, AttractionCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

@Injectable()
export class AttractionService {
  constructor(private readonly prismaService: PrismaService) { }
  public async findOne(
    { where }: AttractionArgs,
    { select }: AttractionSelect
  ): Promise<Attraction> {
    return this.prismaService.attraction.findUnique({
      where,
      select
    })
  }

  public async create(
    data: AttractionCreateInput,
    { select }: AttractionSelect
  ): Promise<Attraction> {
    return this.prismaService.attraction.create({
      data,
      select
    })
  }
}