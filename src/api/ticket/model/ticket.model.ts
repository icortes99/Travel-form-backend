import { Field, Int, ObjectType } from '@nestjs/graphql'

import { Attraction } from 'src/api/attraction/model'

@ObjectType()
export class Ticket {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  uuid?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => Int, { nullable: true })
  avgPrice?: number

  @Field(() => Attraction, { nullable: true })
  attraction?: Attraction
}