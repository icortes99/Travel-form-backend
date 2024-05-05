import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class HotelAttractionHotelIdAttractionIdCompoundUniqueInput {
  @Field(() => Number, { nullable: true })
  hotelId: number

  @Field(() => Number, { nullable: true })
  attractionId: number
}

@InputType()
export class HotelAttractionWhereUniqueInput {
  @Field(() => HotelAttractionHotelIdAttractionIdCompoundUniqueInput, { nullable: true })
  hotelId_attractionId?: HotelAttractionHotelIdAttractionIdCompoundUniqueInput
}