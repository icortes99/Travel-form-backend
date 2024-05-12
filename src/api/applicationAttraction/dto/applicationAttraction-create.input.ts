import { Field, InputType } from '@nestjs/graphql'

import { AttractionCreateNestedOneWithoutApplicationAttractionsInput } from 'src/api/attraction/dto'

import { HotelCreateNestedOneWithoutApplicationAttractionsInput } from 'src/api/hotel/dto'

@InputType()
export class ApplicationAttractionCreateWithoutApplicationInput {
  @Field(() => Date)
  startDate: Date

  @Field(() => Date)
  endDate: Date

  @Field(() => AttractionCreateNestedOneWithoutApplicationAttractionsInput)
  attraction: AttractionCreateNestedOneWithoutApplicationAttractionsInput

  @Field(() => HotelCreateNestedOneWithoutApplicationAttractionsInput)
  hotel: HotelCreateNestedOneWithoutApplicationAttractionsInput
}

@InputType()
export class ApplicationAttractionCreateNestedManyWithoutApplicationInput { 
  @Field(() => [ApplicationAttractionCreateWithoutApplicationInput])
  create?: ApplicationAttractionCreateWithoutApplicationInput[]
}