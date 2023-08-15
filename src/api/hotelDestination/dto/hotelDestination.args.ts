import { ArgsType, Field } from '@nestjs/graphql'

import { HotelDesinationWhereUniqueInput } from './hotelDestination-where-unique.input'

@ArgsType()
export class HotelDestinationArgs {
  @Field(() => HotelDesinationWhereUniqueInput)
  where: HotelDesinationWhereUniqueInput
}