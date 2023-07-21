import { Field, Float, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Hotel {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  images?: string[]

  @Field(() => Float, { nullable: true })
  price?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}