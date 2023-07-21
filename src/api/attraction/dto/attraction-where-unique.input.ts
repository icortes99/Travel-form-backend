import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class AttractionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  id?: number

  /*@Field(() => Int, { nullable: true })
  destinationId?: number*/
  //destinationID is unique in a different table
  //does this apply? I'd like to get all attractions by destiantion ID
}