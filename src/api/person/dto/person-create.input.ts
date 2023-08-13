import { Field, InputType } from '@nestjs/graphql'

import { IsDateString, MaxLength, MinLength } from 'class-validator'


@InputType()
export class PersonCreateWithoutUserInput {
  @MinLength(3)
  @MaxLength(60)
  @Field(() => String)
  firstName: string

  @MinLength(2)
  @MaxLength(60)
  @Field(() => String)
  lastName: string

  @IsDateString()
  @Field(() => Date)
  birthdate: Date
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

  @IsDateString()
  @Field(() => Date)
  birthdate: Date
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