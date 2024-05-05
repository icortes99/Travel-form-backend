import { Module } from '@nestjs/common'

import { HotelAttractionResolver } from './hotelAttraction.resolver'

import { HotelAttractionService } from './hotelAttraction.service'

@Module({
  imports: [],
  providers: [HotelAttractionResolver, HotelAttractionService],
  exports: [HotelAttractionResolver, HotelAttractionService]
})
export class HotelAttractionModule { }