import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Application } from 'src/api/application/model'

import { User } from 'src/api/user/model'

@ObjectType()
export class TravelAgency {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  ownerId?: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  website?: string

  @Field(() => String, { nullable: true })
  logo?: string

  @Field(() => User, { nullable: true })
  owner?: User

  @Field(() => [Application], { nullable: true })
  applications?: Application[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}