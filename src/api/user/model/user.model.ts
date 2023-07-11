import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Person } from 'src/api/person/model';

@ObjectType()
export class User {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => Int, { nullable: true })
  personId?: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Person, { nullable: true })
  person?: Person;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}