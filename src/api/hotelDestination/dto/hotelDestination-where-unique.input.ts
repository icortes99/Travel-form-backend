import { Field, InputType, Int } from '@nestjs/graphql'

import { DestinationWhereUniqueInput } from 'src/api/destination/dto'

import { TravelAgencyWhereUniqueInput } from 'src/api/travelAgency/dto'

@InputType()
export class HotelDesinationWhereUniqueInput {
  @Field(() => Int)
  hotelId: number

  @Field(() => Int)
  destinationId: number

  @Field(() => Int)
  travelAgencyId: number
}

@InputType()
export class HotelsInDesinationAgencyWhereUniqueInput {
  @Field(() => DestinationWhereUniqueInput)
  destination: DestinationWhereUniqueInput

  @Field(() => TravelAgencyWhereUniqueInput)
  travelAgency: TravelAgencyWhereUniqueInput
}