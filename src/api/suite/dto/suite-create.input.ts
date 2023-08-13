import { Field, Float, InputType } from '@nestjs/graphql'

import { SuiteWhereUniqueInput } from './suite-where-unique.input'

import { HotelCreateNestedOneWithoutSuitesInput } from 'src/api/hotel/dto'

@InputType()
export class SuiteCreateInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => [String])
  images: string[]

  @Field(() => Float)
  feePerAdult: number

  @Field(() => Float)
  feePerKid: number

  @Field(() => Float)
  basedPrice: number

  @Field(() => HotelCreateNestedOneWithoutSuitesInput)
  hotel: HotelCreateNestedOneWithoutSuitesInput
}

@InputType()
export class SuiteCreateNestedOneWithoutPassengersInput {
  @Field(() => SuiteWhereUniqueInput)
  connect: SuiteWhereUniqueInput
}