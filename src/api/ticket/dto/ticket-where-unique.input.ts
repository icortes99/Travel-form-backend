import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class TicketWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  id?: number
}