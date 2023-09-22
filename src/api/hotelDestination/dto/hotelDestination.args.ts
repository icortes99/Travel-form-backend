import { ArgsType, Field } from '@nestjs/graphql'

import { HotelDesinationWhereUniqueInput, HotelsInDesinationAgencyWhereUniqueInput } from './hotelDestination-where-unique.input'

@ArgsType()
export class HotelDestinationArgs {
  @Field(() => HotelDesinationWhereUniqueInput)
  where: HotelDesinationWhereUniqueInput
}

@ArgsType()
export class HotelsInDestinationAgencyArgs {
  @Field(() => HotelsInDesinationAgencyWhereUniqueInput)
  where: HotelsInDesinationAgencyWhereUniqueInput
}