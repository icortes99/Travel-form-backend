import { Module } from '@nestjs/common'

import { MailerModule } from '@nestjs-modules/mailer/dist'

import { ConfigModule } from '@nestjs/config'

import { ApplicationResolver } from './application.resolver'

import { ApplicationService } from './application.service'

import { UserService } from '../user/user.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
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
  providers: [UserService, ApplicationResolver, ApplicationService],
  exports: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }