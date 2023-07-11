import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

@ObjectType()
export class Person {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  firstName?: string

  @Field(() => String, { nullable: true })
  lastName?: string

  @Field(() => Date, { nullable: true })
  birthdate?: Date

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}