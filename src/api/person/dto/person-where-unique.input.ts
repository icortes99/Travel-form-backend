import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class PersonWhereUniqueInput {
    @Field(() => Number, { nullable: true })
    id?: number

    @Field(() => String, { nullable: true })
    uuid?: string
}