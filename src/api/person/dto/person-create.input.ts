import { Field, InputType, Int } from '@nestjs/graphql'

import { IsNumber, MaxLength, MinLength } from 'class-validator'

@InputType()
export class PersonCreateWithoutUserInput {
  @MinLength(2)
  @MaxLength(60)
  @Field(() => String)
  firstName: string

  @MinLength(2)
  @MaxLength(60)
  @Field(() => String)
  lastName: string

  @IsNumber()
  @Field(() => Int)
  age: number
}

@InputType()
export class PersonCreateWithoutPassengersInput {
  @MinLength(3)
  @MaxLength(60)
  @Field(() => String)
  firstName: string

  @MinLength(2)
  @MaxLength(60)
  @Field(() => String)
  lastName: string

  @IsNumber()
  @Field(() => Int)
  age: number
}

@InputType()
export class PersonCreateNestedOneWithoutUserInput {
  @Field(() => PersonCreateWithoutUserInput)
  create: PersonCreateWithoutUserInput
}

@InputType()
export class PersonCreateNestedOneWithoutPassengersInput {
  @Field(() => PersonCreateWithoutPassengersInput)
  create: PersonCreateWithoutPassengersInput
}