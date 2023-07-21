import { Field, InputType } from '@nestjs/graphql'

import { UserCreateNestedOneWithoutTravelAgencyInput } from 'src/api/user/dto'

import { PersonCreateNestedManyWithoutApplicationInput } from 'src/api/person/dto'

import { TravelAgencyCreateNestedOneWithoutApplicationsInput } from 'src/api/travel-agency/dto'

import { DestinationCreateNestedOneWithoutApplicationsInput } from 'src/api/destination/dto'

@InputType()
export class ApplicationCreateInput {
  @Field(() => UserCreateNestedOneWithoutTravelAgencyInput, { nullable: true })
  user?: UserCreateNestedOneWithoutTravelAgencyInput

  @Field(() => TravelAgencyCreateNestedOneWithoutApplicationsInput)
  travelAgency: TravelAgencyCreateNestedOneWithoutApplicationsInput

  @Field(() => PersonCreateNestedManyWithoutApplicationInput, { nullable: true })
  companions?: PersonCreateNestedManyWithoutApplicationInput

  @Field(() => DestinationCreateNestedOneWithoutApplicationsInput)
  destination: DestinationCreateNestedOneWithoutApplicationsInput
}