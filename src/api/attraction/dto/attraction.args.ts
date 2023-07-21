import { ArgsType, Field } from '@nestjs/graphql'

import { AttractionWhereUniqueInput } from './attraction-where-unique.input'

@ArgsType()
export class AttractionArgs {
  @Field(() => AttractionWhereUniqueInput)
  where: AttractionWhereUniqueInput
}