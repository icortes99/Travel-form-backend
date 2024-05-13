import { BadRequestException, Injectable } from '@nestjs/common'

import { User, UserSelect } from './model'

import { UserArgs, UserCreateInput } from './dto'

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service'

import { Constants } from 'src/shared/constants'

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
      if ((data.person.create.age).valueOf() < Constants.MINIMUM_AGE) {
        throw new BadRequestException(`Age must be greather than ${Constants.MINIMUM_AGE}`)
      }
    }
    return this.prismaService.user.create({
      data,
      select,
    })
  }
}