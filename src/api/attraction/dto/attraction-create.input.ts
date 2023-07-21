import { Field, Float, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

import { DestinationCreateNestedOneWithoutAttractionsInput } from 'src/api/destination/dto'

@InputType()
export class AttractionCreateInput {
  @Field(() => String)
  name: string

  @MinLength(250)
  @MaxLength(400)
  @Field(() => String)
  description: string

  @Field(() => [String])
  images: string[]

  @Field(() => Float)
  travelDuration: number

  @Field(() => Float)
  travelDistance: number

  @Field(() => DestinationCreateNestedOneWithoutAttractionsInput)
  destination: DestinationCreateNestedOneWithoutAttractionsInput //use the connect class
}