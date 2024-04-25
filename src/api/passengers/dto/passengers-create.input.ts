import { Field, InputType } from '@nestjs/graphql'

import { Max, Min } from 'class-validator'

import { number } from 'joi'

import { PersonCreateNestedOneWithoutPassengersInput } from 'src/api/person/dto'

import { SuiteCreateNestedOneWithoutPassengersInput } from 'src/api/suite/dto'

@InputType()
export class PassengersCreateWithoutApplicationInput {
  @Field(() => SuiteCreateNestedOneWithoutPassengersInput)
  suite: SuiteCreateNestedOneWithoutPassengersInput

  @Field(() => PersonCreateNestedOneWithoutPassengersInput)
  person: PersonCreateNestedOneWithoutPassengersInput

  @Min(1)
  @Max(100)
  @Field(() => Number)
  roomAssigned: number
}

@InputType()
export class PassengersCreateNestedManyWithoutApplicationInput {
  @Field(() => [PassengersCreateWithoutApplicationInput])
  create: PassengersCreateWithoutApplicationInput[]
}

/*@InputType()
export class PassengersCreateNestedManyWithoutApplicationInput {
  @Field(() => [PassengersWhereUniqueInput])
  connect: PassengersWhereUniqueInput[]
}*/