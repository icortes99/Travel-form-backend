import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Application } from 'src/api/application/model'

@ObjectType()
export class Person {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Int, { nullable: true })
  applicationId?: number

  @Field(() => String, { nullable: true })
  firstName?: string

  @Field(() => String, { nullable: true })
  lastName?: string

  @Field(() => Date, { nullable: true })
  birthdate?: Date

  @Field(() => Application, { nullable: true })
  application?: Application

  @Field(() => Date, { nullable: true })
  createdAt?: Date

  @Field(() => Date, { nullable: true })
  updatedAt?: Date
}