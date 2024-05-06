import { Module } from '@nestjs/common'

import { ConfigModule } from 'src/shared/config/config.module'

import { UserModule } from './api/user/user.module'

import { PrismaModule } from './shared/datasource/prisma/prisma.module'

import { TravelAgencyModule } from './api/travelAgency/travel-agency.module'

import { HotelModule } from './api/hotel/hotel.module'

import { DestinationModule } from './api/destination/destination.module'

import { AttractionModule } from './api/attraction/attraction.module'

import { ApplicationModule } from './api/application/application.module'

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    UserModule,
    TravelAgencyModule,
    HotelModule,
    DestinationModule,
    AttractionModule,
    ApplicationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }