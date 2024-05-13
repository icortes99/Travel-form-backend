import { ArgsType, Field } from '@nestjs/graphql'

import { HotelWhereUniqueInput } from './hotel-where-unique.input'

@ArgsType()
export class HotelArgs {
  @Field(() => HotelWhereUniqueInput)
  where: HotelWhereUniqueInput
}