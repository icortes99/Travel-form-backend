import { Field, Int, ObjectType } from '@nestjs/graphql'

import { HotelDestination } from 'src/api/hotelDestination/model'

import { Suite } from 'src/api/suite/model'

@ObjectType()
export class Hotel {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  images?: string[]

  @Field(() => [Suite], { nullable: true })
  suites?: Suite[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date

  @Field(() => [HotelDestination], { nullable: true })
  hotelDestinations?: HotelDestination[]
}