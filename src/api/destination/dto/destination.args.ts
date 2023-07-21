import { ArgsType, Field } from '@nestjs/graphql'

import { DestinationWhereUniqueInput } from './destination-where-unique.input'

@ArgsType()
export class DestinationArgs {
  @Field(() => DestinationWhereUniqueInput)
  where: DestinationWhereUniqueInput
}