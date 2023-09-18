import { Field, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

import { UserCreateNestedOneWithoutTravelAgencyInput } from 'src/api/user/dto'

import { TravelAgencyWhereUniqueInput } from './travel-agency-where-unique.input'

@InputType()
export class TravelAgencyCreateInput {
  @MinLength(3)
  @MaxLength(30)
  @Field(() => String)
  name: string

  @Field(() => String)
  website: string

  @Field(() => String)
  logo: string

  @Field(() => UserCreateNestedOneWithoutTravelAgencyInput)
  owner: UserCreateNestedOneWithoutTravelAgencyInput
}

@InputType()
export class TravelAgencyCreateNestedOneWithoutDestinationsInput {
  @Field(() => TravelAgencyWhereUniqueInput)
  connect: TravelAgencyWhereUniqueInput
}

@InputType()
export class TravelAgencyCreateNestedOneWithoutApplicationsInput {
  @Field(() => TravelAgencyWhereUniqueInput)
  connect: TravelAgencyWhereUniqueInput
}

@InputType()
export class HotelDestinationCreateNestedManyWithoutTravelAgencyInput {
  @Field(() => TravelAgencyWhereUniqueInput)
  connect: TravelAgencyWhereUniqueInput
}