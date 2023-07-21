import { Field, InputType } from '@nestjs/graphql'

import { MaxLength, MinLength } from 'class-validator'

@InputType()
export class PersonCreateWithoutUserInput {
    @MinLength(3)
    @MaxLength(60)
    @Field(() => String)
    firstName: string

    @MinLength(2)
    @MaxLength(60)
    @Field(() => String)
    lastName: string

    @Field(() => Date)
    birthdate: Date
}

@InputType()
export class PersonCreateNestedOneWithoutUserInput {
    @Field(() => PersonCreateWithoutUserInput)
    create: PersonCreateWithoutUserInput
}

@InputType()
export class PersonCreateManyApplicationInputEnvelope {
    @Field(() => [PersonCreateWithoutUserInput])
    data: PersonCreateWithoutUserInput[]
}

@InputType()
export class PersonCreateNestedManyWithoutApplicationInput {
    @Field(() => PersonCreateManyApplicationInputEnvelope)
    createMany: PersonCreateManyApplicationInputEnvelope
}