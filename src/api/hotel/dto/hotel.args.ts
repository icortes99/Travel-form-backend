import { ArgsType, Field } from '@nestjs/graphql'

import { AttractionWhereUniqueInput } from 'src/api/attraction/dto'

@ArgsType()
export class HotelArgs {
  @Field(() => AttractionWhereUniqueInput)
  where: AttractionWhereUniqueInput
}