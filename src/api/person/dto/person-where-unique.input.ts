import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class PersonWhereUniqueInput {
    @Field(() => Number, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    last_name?: string

    @Field(() => Date, { nullable: true })
    birth?: Date
}