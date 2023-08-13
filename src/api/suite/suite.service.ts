import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { SuiteArgs, SuiteCreateInput } from './dto'

import { Suite, SuiteSelect } from './model'

@Injectable()
export class SuiteService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: SuiteArgs,
    { select }: SuiteSelect
  ): Promise<Suite> {
    return this.prismaService.suite.findUnique({
      where,
      select
    })
  }

  public async create(
    data: SuiteCreateInput,
    { select }: SuiteSelect
  ): Promise<Suite> {
    return this.prismaService.suite.create({
      data,
      select
    })
  }
}