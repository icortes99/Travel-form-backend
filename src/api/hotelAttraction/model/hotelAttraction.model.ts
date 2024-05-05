import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Attraction } from 'src/api/attraction/model'

import { Hotel } from 'src/api/hotel/model'

@ObjectType()
export class HotelAttraction {
  @Field(() => Int, { nullable: true })
  hotelId?: number

  @Field(() => Int, { nullable: true })
  attractionId?: number

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel

  @Field(() => Attraction, { nullable: true })
  attraction?: Attraction
}