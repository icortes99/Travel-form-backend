import { ArgsType, Field } from '@nestjs/graphql'

import { HotelDestinationHotelIdDestinationIdTravelAgencyIdCompoundUniqueInput } from './hotelDestination-where-unique.input'

@ArgsType()
export class HotelDestinationArgs {
  @Field(() => HotelDestinationHotelIdDestinationIdTravelAgencyIdCompoundUniqueInput)
  where: HotelDestinationHotelIdDestinationIdTravelAgencyIdCompoundUniqueInput
}