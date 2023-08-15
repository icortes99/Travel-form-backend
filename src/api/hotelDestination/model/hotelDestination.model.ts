import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Destination } from 'src/api/destination/model'

import { Hotel } from 'src/api/hotel/model'

import { TravelAgency } from 'src/api/travelAgency/model'

@ObjectType()
export class HotelDestination {
  @Field(() => Int, { nullable: true })
  hotelId?: number

  @Field(() => Int, { nullable: true })
  destinationId?: number

  @Field(() => Int, { nullable: true })
  travelAgencyId?: number

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel

  @Field(() => Destination, { nullable: true })
  destination?: Destination

  @Field(() => TravelAgency, { nullable: true })
  travelAgency?: TravelAgency
}