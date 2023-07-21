import { Field, Float, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

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

  @Field(() => Float)
  price: number
}