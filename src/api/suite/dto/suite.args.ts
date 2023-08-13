import { ArgsType, Field } from '@nestjs/graphql'

import { SuiteWhereUniqueInput } from './suite-where-unique.input'

@ArgsType()
export class SuiteArgs {
  @Field(() => SuiteWhereUniqueInput)
  where: SuiteWhereUniqueInput
}