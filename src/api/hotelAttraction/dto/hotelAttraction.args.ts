import { ArgsType, Field } from '@nestjs/graphql'

import { HotelAttractionWhereUniqueInput } from './hotelAttraction-where-unique.input'

@ArgsType()
export class HotelAttractionArgs {
  @Field(() => HotelAttractionWhereUniqueInput)
  where: HotelAttractionWhereUniqueInput
}