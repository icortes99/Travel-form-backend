import { Field, InputType } from '@nestjs/graphql'

import { Max, MaxLength, Min, MinLength } from 'class-validator'

@InputType()
export class TicketCreateInput {
  @MinLength(1)
  @MaxLength(15)
  @Field(() => String)
  name: string

  @MinLength(1)
  @MaxLength(30)
  @Field(() => String)
  description: string

  @Min(1)
  @Max(5000)
  @Field(() => Number)
  avgPrice: number

  // Attraction
}