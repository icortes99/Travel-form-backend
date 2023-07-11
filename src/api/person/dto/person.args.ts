import { ArgsType, Field } from '@nestjs/graphql'
import { PersonWhereUniqueInput } from './person-where-unique.input'

@ArgsType()
export class PersonArgs {
    @Field(() => PersonWhereUniqueInput)
    where: PersonWhereUniqueInput
}