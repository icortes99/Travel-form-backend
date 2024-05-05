import { Field, ObjectType } from '@nestjs/graphql'

import { Application } from 'src/api/application/model'

import { Hotel } from 'src/api/hotel/model'

import { Person } from 'src/api/person/model'


@ObjectType()
export class Passengers {
  @Field(() => Number)
  hotelId?: number

  @Field(() => Number)
  personId?: number

  @Field(() => Number)
  applicationId?: number

  @Field(() => Number)
  roomAssigned?: number

  @Field(() => Hotel)
  hotel?: Hotel

  @Field(() => Person)
  person?: Person

  @Field(() => Application)
  application?: Application
}