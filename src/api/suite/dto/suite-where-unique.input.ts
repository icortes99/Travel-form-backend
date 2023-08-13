import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class SuiteWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Number, { nullable: true })
  id: number
}