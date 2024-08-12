import { ArgsType, Field } from '@nestjs/graphql'

import { TicketWhereUniqueInput } from './ticket-where-unique.input'

@ArgsType()
export class TicketArgs {
  @Field(() => TicketWhereUniqueInput)
  where: TicketWhereUniqueInput
}