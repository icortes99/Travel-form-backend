import { ArgsType, Field } from '@nestjs/graphql'

import { TravelAgencyWhereUniqueInput } from './travel-agency-where-unique.input'

@ArgsType()
export class TravelAgencyArgs {
  @Field(() => TravelAgencyWhereUniqueInput)
  where: TravelAgencyWhereUniqueInput
}