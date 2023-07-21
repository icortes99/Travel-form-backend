import { ArgsType, Field } from '@nestjs/graphql'

import { ApplicationWhereUniqueInput } from './application-where-unique.input'

@ArgsType()
export class ApplicationArgs {
  @Field(() => ApplicationWhereUniqueInput)
  where: ApplicationWhereUniqueInput
}