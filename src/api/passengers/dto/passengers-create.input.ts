import { Field, InputType } from '@nestjs/graphql'

import { Max, Min } from 'class-validator'

import { PersonCreateNestedOneWithoutPassengersInput } from 'src/api/person/dto'

@InputType()
export class PassengersCreateWithoutApplicationInput {
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