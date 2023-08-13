import { Field, InputType } from '@nestjs/graphql'

import { PersonCreateNestedOneWithoutPassengersInput } from 'src/api/person/dto'

import { SuiteCreateNestedOneWithoutPassengersInput } from 'src/api/suite/dto'

@InputType()
export class PassengersCreateWithoutApplicationInput {
  @Field(() => SuiteCreateNestedOneWithoutPassengersInput)
  suite: SuiteCreateNestedOneWithoutPassengersInput

  @Field(() => PersonCreateNestedOneWithoutPassengersInput)
  person: PersonCreateNestedOneWithoutPassengersInput
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