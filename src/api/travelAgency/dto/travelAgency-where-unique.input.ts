import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class TravelAgencyWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  id?: number
}