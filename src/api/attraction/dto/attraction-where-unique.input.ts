import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class AttractionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  id?: number
}