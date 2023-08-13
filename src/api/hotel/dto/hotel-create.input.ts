import { Field, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

import { HotelWhereUniqueInput } from './hotel-where-unique.input'

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
}

@InputType()
export class HotelDestinationCreateNestedManyWithoutHotelInput {
  @Field(() => HotelWhereUniqueInput)
  connect: HotelWhereUniqueInput
}

@InputType()
export class SuiteUncheckedCreateNestedManyWithoutHotelInput {
  @Field(() => HotelWhereUniqueInput)
  connect: HotelWhereUniqueInput
}

@InputType()
export class HotelCreateNestedOneWithoutSuitesInput {
  @Field(() => HotelWhereUniqueInput)
  connect: HotelWhereUniqueInput
}