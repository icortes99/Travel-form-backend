import { Field, InputType } from '@nestjs/graphql'

import { AttractionCreateNestedOneWithoutApplicationAttractionsInput } from 'src/api/attraction/dto'

@InputType()
export class ApplicationAttractionCreateWithoutApplicationInput {
  @Field(() => AttractionCreateNestedOneWithoutApplicationAttractionsInput)
  attraction: AttractionCreateNestedOneWithoutApplicationAttractionsInput
}

@InputType()
export class ApplicationAttractionCreateNestedManyWithoutApplicationInput {
  @Field(() => [ApplicationAttractionCreateWithoutApplicationInput])
  create?: ApplicationAttractionCreateWithoutApplicationInput[]
}