import { Field, InputType, Int } from '@nestjs/graphql'

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
  @Field(() => Int)
  destinationId: number

  @Field(() => TravelAgencyWhereUniqueInput)
  travelAgency: TravelAgencyWhereUniqueInput
}