import { Module } from '@nestjs/common'

import { DestinationResolver } from './destination.resolver'

import { DestinationService } from './destination.service'

@Module({
  imports: [],
  providers: [DestinationResolver, DestinationService],
  exports: [DestinationResolver, DestinationService]
})
export class DestinationModule { }