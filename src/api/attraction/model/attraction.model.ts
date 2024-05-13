import { Field, Int, ObjectType } from '@nestjs/graphql'

import { ApplicationAttraction } from 'src/api/applicationAttraction/model'

import { Destination } from 'src/api/destination/model'

import { Hotel } from 'src/api/hotel/model'

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

  @Field(() => Destination, { nullable: true })
  destination?: Destination

  @Field(() => [ApplicationAttraction], { nullable: true })
  applicationAttractions?: ApplicationAttraction[]

  @Field(() => [Hotel], { nullable: true })
  hotels?: Hotel[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}