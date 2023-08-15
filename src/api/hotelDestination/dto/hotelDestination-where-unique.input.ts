import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class HotelDesinationWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  hotelId: number

  @Field(() => Int, { nullable: true })
  destinationId: number

  @Field(() => Int, { nullable: true })
  travelAgencyId: number
}

@InputType()
export class HotelDestinationHotelIdDestinationIdTravelAgencyIdCompoundUniqueInput {
  @Field(() => HotelDesinationWhereUniqueInput, { nullable: true })
  hotelId_destinationId_travelAgencyId?: HotelDesinationWhereUniqueInput
}