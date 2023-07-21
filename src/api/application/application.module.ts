import { Module } from '@nestjs/common'

import { ApplicationResolver } from './application.resolver'

import { ApplicationService } from './application.service'

@Module({
  imports: [],
  providers: [ApplicationResolver, ApplicationService],
  exports: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }