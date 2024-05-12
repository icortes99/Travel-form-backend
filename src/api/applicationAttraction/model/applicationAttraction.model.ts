import { Field, ObjectType } from '@nestjs/graphql'

import { Application } from 'src/api/application/model'

import { Attraction } from 'src/api/attraction/model'

import { Hotel } from 'src/api/hotel/model'

@ObjectType()
export class ApplicationAttraction {
  @Field(() => Number, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => Number, { nullable: true })
  applicationId?: number

  @Field(() => Number, { nullable: true })
  attractionId?: number

  @Field(() => Date, { nullable: true })
  startDate?: Date

  @Field(() => Date, { nullable: true })
  endDate?: Date

  @Field(() => Application, { nullable: true })
  application?: Application

  @Field(() => Attraction, { nullable: true })
  attraction?: Attraction

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel
}