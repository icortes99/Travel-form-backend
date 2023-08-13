import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Passengers } from 'src/api/passengers/model/passengers.model'

@ObjectType()
export class Person {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

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

  @Field(() => [Passengers], { nullable: true })
  passengers?: Passengers[]
}