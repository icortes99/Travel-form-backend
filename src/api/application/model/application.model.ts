import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'

import { User } from 'src/api/user/model'

import { TravelAgency } from 'src/api/travelAgency/model'

import { Destination } from 'src/api/destination/model'

import { ContactPreference, LeadSource, TripObjective } from '@prisma/client'

import { Passengers } from 'src/api/passengers/model/passengers.model'

import { ApplicationAttraction } from 'src/api/applicationAttraction/model'

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

  @Field(() => LeadSource, { nullable: true })
  leadSource?: LeadSource

  @Field(() => String, { nullable: true })
  userCurrentLocation?: string

  @Field(() => Boolean, { nullable: true })
  hasEntryPermission?: boolean

  @Field(() => Date, { nullable: true })
  startDate?: Date

  @Field(() => Date, { nullable: true })
  endDate?: Date

  @Field(() => TripObjective, { nullable: true })
  tripObjective?: TripObjective

  @Field(() => ContactPreference, { nullable: true })
  contactPreference?: ContactPreference

  @Field(() => User, { nullable: true })
  user?: User

  @Field(() => TravelAgency, { nullable: true })
  travelAgency?: TravelAgency

  @Field(() => Destination, { nullable: true })
  destination?: Destination

  @Field(() => [Passengers], { nullable: true })
  passengers?: Passengers[]

  @Field(() => [ApplicationAttraction], { nullable: true })
  applicationAttractions?: ApplicationAttraction[]

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}

registerEnumType(LeadSource, {
  name: 'LeadSource',
})

registerEnumType(ContactPreference, {
  name: 'ContactPreference',
})

registerEnumType(TripObjective, {
  name: 'TripObjective',
})