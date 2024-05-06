import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Attraction } from 'src/api/attraction/model'

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

  @Field(() => [String], { nullable: true })
  roomTypes?: string[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date

  @Field(() => Attraction, { nullable: true })
  attraction?: Attraction
}