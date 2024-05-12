import { Field, ObjectType } from '@nestjs/graphql'

import { Application } from 'src/api/application/model'

import { Person } from 'src/api/person/model'


@ObjectType()
export class Passengers {
  @Field(() => Number)
  personId?: number

  @Field(() => Number)
  applicationId?: number

  @Field(() => Number)
  roomAssigned?: number

  @Field(() => Person)
  person?: Person

  @Field(() => Application)
  application?: Application
}