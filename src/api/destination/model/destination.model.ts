import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Application } from 'src/api/application/model'

import { Attraction } from 'src/api/attraction/model'
import { TravelAgency } from 'src/api/travel-agency/model'

@ObjectType()
export class Destination {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  images?: string[]

  @Field(() => String, { nullable: true })
  video?: string

  @Field(() => [Attraction], { nullable: true })
  attractions?: Attraction[]

  @Field(() => [Application], { nullable: true })
  applications?: Application[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}