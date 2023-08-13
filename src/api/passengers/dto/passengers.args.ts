import { ArgsType, Field } from '@nestjs/graphql'

import { PassengersWhereUniqueInput } from './passengers-where-unique.input'

@ArgsType()
export class PassengersArgs {
  @Field(() => PassengersWhereUniqueInput)
  where: PassengersWhereUniqueInput
}