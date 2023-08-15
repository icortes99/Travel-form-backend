import { Field, ObjectType } from '@nestjs/graphql'

import { Application } from 'src/api/application/model'

import { Attraction } from 'src/api/attraction/model'

@ObjectType()
export class ApplicationAttraction {
  @Field(() => Number)
  applicationId?: number

  @Field(() => Number)
  attractionId?: number

  @Field(() => Application)
  application?: Application

  @Field(() => Attraction)
  attraction?: Attraction
}