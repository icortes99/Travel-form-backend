import { Module } from '@nestjs/common'

import { MailerModule } from '@nestjs-modules/mailer/dist'

import { ApplicationResolver } from './application.resolver'

import { ApplicationService } from './application.service'

import { UserService } from '../user/user.service'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        },
        secure: false
      }
    })
  ],
  providers: [UserService, MailerModule, ApplicationResolver, ApplicationService],
  exports: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }