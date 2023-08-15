import { Field, InputType } from '@nestjs/graphql'

import { ContactPreference, LeadSource, TripObjective } from '@prisma/client'

import { UserCreateNestedOneWithoutApplicationsInput } from 'src/api/user/dto'

import { TravelAgencyCreateNestedOneWithoutApplicationsInput } from 'src/api/travelAgency/dto'

import { DestinationCreateNestedOneWithoutApplicationsInput } from 'src/api/destination/dto'

import { PassengersCreateNestedManyWithoutApplicationInput } from 'src/api/passengers/dto'

import { ApplicationAttractionCreateNestedManyWithoutApplicationInput } from 'src/api/applicationAttraction/dto'

@InputType()
export class ApplicationCreateInput {
  @Field(() => UserCreateNestedOneWithoutApplicationsInput, { nullable: true })
  user?: UserCreateNestedOneWithoutApplicationsInput

  @Field(() => TravelAgencyCreateNestedOneWithoutApplicationsInput)
  travelAgency: TravelAgencyCreateNestedOneWithoutApplicationsInput

  @Field(() => DestinationCreateNestedOneWithoutApplicationsInput)
  destination: DestinationCreateNestedOneWithoutApplicationsInput

  @Field(() => PassengersCreateNestedManyWithoutApplicationInput, { nullable: true })
  passengers?: PassengersCreateNestedManyWithoutApplicationInput

  @Field(() => LeadSource)
  leadSource: LeadSource

  @Field(() => String)
  userCurrentLocation: string

  @Field(() => Boolean)
  hasEntryPermission: boolean

  @Field(() => Date)
  startDate: Date

  @Field(() => Date)
  endDate: Date

  @Field(() => TripObjective)
  tripObjective: TripObjective

  @Field(() => ContactPreference)
  contactPreference: ContactPreference

  @Field(() => ApplicationAttractionCreateNestedManyWithoutApplicationInput)
  applicationAttractions: ApplicationAttractionCreateNestedManyWithoutApplicationInput
}