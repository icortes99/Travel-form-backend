import { Module } from '@nestjs/common'

import { ApplicationResolver } from './application.resolver'

import { ApplicationService } from './application.service'

import { UserService } from '../user/user.service'

import { NotionService } from 'src/shared/modules/crm'

import { MailService } from 'src/shared/modules/mail/mail'

@Module({
  imports: [],
  providers: [NotionService, MailService, UserService, ApplicationResolver, ApplicationService],
  exports: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }