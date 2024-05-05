import { Field, Int, ObjectType } from '@nestjs/graphql'

import { HotelAttraction } from 'src/api/hotelAttraction/model'

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

  @Field(() => [HotelAttraction], { nullable: true })
  hotelAttractions?: HotelAttraction[]
}