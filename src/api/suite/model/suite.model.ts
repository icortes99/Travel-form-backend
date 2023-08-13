import { Field, Float, ObjectType } from '@nestjs/graphql'

import { Hotel } from 'src/api/hotel/model'

import { Passengers } from 'src/api/passengers/model/passengers.model'

@ObjectType()
export class Suite {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Number, { nullable: true })
  hotelId?: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  images?: string[]

  @Field(() => Float, { nullable: true })
  feePerAdult?: number

  @Field(() => Float, { nullable: true })
  feePerKid?: number

  @Field(() => Float, { nullable: true })
  basedPrice?: number

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel

  @Field(() => [Passengers], { nullable: true })
  passengers?: Passengers[]
}