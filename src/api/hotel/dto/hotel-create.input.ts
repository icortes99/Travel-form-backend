import { Field, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

import { HotelWhereUniqueInput } from './hotel-where-unique.input'

import { AttractionCreateNestedOneWithoutHotelsInput } from 'src/api/attraction/dto'

@InputType()
export class HotelCreateInput {
  @MaxLength(35)
  @Field(() => String)
  name: string

  @MinLength(200)
  @MaxLength(350)
  @Field(() => String)
  description: string

  @Field(() => [String])
  images: string[]

  @Field(() => [String])
  roomTypes: string[]

  @Field(() => AttractionCreateNestedOneWithoutHotelsInput)
  attraction: AttractionCreateNestedOneWithoutHotelsInput
}

@InputType()
export class HotelCreateNestedOneWithoutApplicationAttractionsInput {
  @Field(() => HotelWhereUniqueInput)
  connect: HotelWhereUniqueInput
}