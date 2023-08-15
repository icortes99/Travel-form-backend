import { Field, InputType } from '@nestjs/graphql'

import { HotelDestinationCreateNestedManyWithoutDestinationInput } from 'src/api/destination/dto'

import { HotelDestinationCreateNestedManyWithoutHotelInput } from 'src/api/hotel/dto'

import { TravelAgencyCreateNestedOneWithoutDestinationsInput } from 'src/api/travelAgency/dto'

@InputType()
export class HotelDestinationCreateInput {
  @Field(() => HotelDestinationCreateNestedManyWithoutHotelInput)
  hotel: HotelDestinationCreateNestedManyWithoutHotelInput

  @Field(() => HotelDestinationCreateNestedManyWithoutDestinationInput)
  destination: HotelDestinationCreateNestedManyWithoutDestinationInput

  @Field(() => TravelAgencyCreateNestedOneWithoutDestinationsInput)
  travelAgency: TravelAgencyCreateNestedOneWithoutDestinationsInput
}