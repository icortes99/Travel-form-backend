import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class HotelDesinationWhereUniqueInput {
  @Field(() => Int)
  hotelId: number

  @Field(() => Int)
  destinationId: number

  @Field(() => Int)
  travelAgencyId: number
}