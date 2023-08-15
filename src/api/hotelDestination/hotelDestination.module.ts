import { Module } from '@nestjs/common'

import { HotelDestinationResolver } from './hotelDestination.resolver'

import { HotelDestinationService } from './hotelDestination.service'

@Module({
  imports: [],
  providers: [HotelDestinationResolver, HotelDestinationService],
  exports: [HotelDestinationResolver, HotelDestinationService]
})
export class HotelDestinationModule { }