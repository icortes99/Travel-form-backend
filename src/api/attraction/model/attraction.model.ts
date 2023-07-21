import { Field, Float, Int, ObjectType } from '@nestjs/graphql'

import { Destination } from 'src/api/destination/model'

@ObjectType()
export class Attraction {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  destinationId?: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  images?: string[]

  @Field(() => Float, { nullable: true })
  travelDuration?: number

  @Field(() => Number, { nullable: true })
  travelDistance?: number

  @Field(() => Destination, { nullable: true })
  destination?: Destination

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}