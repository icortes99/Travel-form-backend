import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

import { PersonCreateNestedOneWithoutUserInput } from 'src/api/person/dto';

import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => String)
  password: string;

  @Field(() => String)
  photo: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => PersonCreateNestedOneWithoutUserInput)
  person: PersonCreateNestedOneWithoutUserInput
}

@InputType()
export class UserCreateNestedOneWithoutTravelAgencyInput {
  @Field(() => UserWhereUniqueInput)
  connect: UserWhereUniqueInput
}

@InputType()
export class UserCreateNestedOneWithoutApplicationsInput {
  @Field(() => UserWhereUniqueInput)
  connect: UserWhereUniqueInput
}