import { Module } from '@nestjs/common'

import { ApplicationResolver } from './application.resolver'

import { ApplicationService } from './application.service'

import { UserService } from '../user/user.service'

@Module({
  imports: [],
  providers: [UserService, ApplicationResolver, ApplicationService],
  exports: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }