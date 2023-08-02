import { Module } from '@nestjs/common'

import { TravelAgencyResolver } from './travelAgency.resolver'

import { TravelAgencyService } from './travelAgency.service'

@Module({
  imports: [],
  providers: [TravelAgencyResolver, TravelAgencyService],
  exports: [TravelAgencyResolver, TravelAgencyService],
})

export class TravelAgencyModule { }