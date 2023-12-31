import { BadRequestException, Injectable } from '@nestjs/common'

import { User, UserSelect } from './model'

import { UserArgs, UserCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import validateAge from 'src/shared/util/refuse-by/date'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  public async findOne(
    { where }: UserArgs,
    { select }: UserSelect,
  ): Promise<User> {
    return this.prismaService.user.findUnique({
      where,
      select,
    })
  }

  public async findUserPassword({ where }: UserArgs) {
    const user = await this.prismaService.user.findUnique({
      where,
    })
    return user ? user.password : null;
  }

  public async create(
    data: UserCreateInput,
    { select }: UserSelect,
  ): Promise<User> {
    if (data.person) {
      if (!validateAge(data.person.create.birthdate, 0)) {
        throw new BadRequestException('Date not supported')
      }
    }
    return this.prismaService.user.create({
      data,
      select,
    })
  }
}