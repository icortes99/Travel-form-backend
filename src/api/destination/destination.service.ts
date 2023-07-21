import { Injectable } from '@nestjs/common'

import { Destination, DestinationSelect } from './model'

import { DestinationArgs, DestinationCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

@Injectable()
export class DestinationService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: DestinationArgs,
    { select }: DestinationSelect
  ): Promise<Destination> {
    return this.prismaService.destination.findUnique({
      where,
      select
    })
  }

  public async create(
    data: DestinationCreateInput,
    { select }: DestinationSelect
  ): Promise<Destination> {
    return this.prismaService.destination.create({
      data,
      select
    })
  }

  //we need all destinations per travel agency
  /*public async findAll(
    { where }: DestinationArgs,
    { select }: DestinationSelect
  ): Promise<Destination> {
    return this.prismaService.destination.findMany({
      where,
      select
    })
  }*/
}