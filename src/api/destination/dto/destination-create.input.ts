import { Field, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

import { DestinationWhereUniqueInput } from './destination-where-unique.input'

@InputType()
export class DestinationCreateInput {
  @MaxLength(20)
  @Field(() => String)
  name: string

  @MinLength(150)
  @MaxLength(240)
  @Field(() => String)
  description: string

  @Field(() => [String])
  images: string[]

  @Field(() => String)
  video: string
}

@InputType()
export class DestinationCreateNestedOneWithoutAttractionsInput {
  @Field(() => DestinationWhereUniqueInput)
  connect: DestinationWhereUniqueInput
}

@InputType()
export class DestinationCreateNestedOneWithoutApplicationsInput {
  @Field(() => DestinationWhereUniqueInput)
  connect: DestinationWhereUniqueInput
}