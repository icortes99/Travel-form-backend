import { Module } from '@nestjs/common'

import { HotelResolver } from './hotel.resolver'

import { HotelService } from './hotel.service'

@Module({
  imports: [],
  providers: [HotelResolver, HotelService],
  exports: [HotelResolver, HotelService]
})
export class HotelModule { }