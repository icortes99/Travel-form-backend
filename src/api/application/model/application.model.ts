import { Field, Int, ObjectType } from '@nestjs/graphql'

import { User } from 'src/api/user/model'

import { TravelAgency } from 'src/api/travel-agency/model'

import { Person } from 'src/api/person/model'

import { Destination } from 'src/api/destination/model'

@ObjectType()
export class Application {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => Int, { nullable: true })
  travelAgencyId?: number

  @Field(() => Int, { nullable: true })
  destinationId?: number

  @Field(() => User, { nullable: true })
  user?: User

  @Field(() => TravelAgency, { nullable: true })
  travelAgency?: TravelAgency

  @Field(() => Destination, { nullable: true })
  destination?: Destination

  @Field(() => [Person], { nullable: true })
  companions?: Person[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}