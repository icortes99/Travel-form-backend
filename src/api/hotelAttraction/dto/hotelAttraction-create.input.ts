import { Field, InputType } from '@nestjs/graphql'

import { HotelAttractionCreateNestedManyWithoutAttractionInput } from 'src/api/attraction/dto'

import { HotelAttractionCreateNestedManyWithoutHotelInput } from 'src/api/hotel/dto'

@InputType()
export class HotelAttractionCreateInput {
  @Field(() => HotelAttractionCreateNestedManyWithoutHotelInput)
  hotel: HotelAttractionCreateNestedManyWithoutHotelInput

  @Field(() => HotelAttractionCreateNestedManyWithoutAttractionInput)
  attraction: HotelAttractionCreateNestedManyWithoutAttractionInput
}