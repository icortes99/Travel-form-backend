import { ArgsType, Field } from '@nestjs/graphql'

import { TravelAgencyWhereUniqueInput } from './travelAgency-where-unique.input'

@ArgsType()
export class TravelAgencyArgs {
  @Field(() => TravelAgencyWhereUniqueInput)
  where: TravelAgencyWhereUniqueInput
}