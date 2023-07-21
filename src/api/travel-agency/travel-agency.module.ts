import { Module } from '@nestjs/common'

import { TravelAgencyResolver } from './travel-agency.resolver'

import { TravelAgencyService } from './travel-agency.service'

@Module({
  imports: [],
  providers: [TravelAgencyResolver, TravelAgencyService],
  exports: [TravelAgencyResolver, TravelAgencyService],
})

export class TravelAgencyModule { }