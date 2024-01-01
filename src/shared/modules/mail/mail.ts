import { Injectable } from '@nestjs/common'

import SGMail, { MailDataRequired } from '@sendgrid/mail'

@Injectable()
export class MailService {
  constructor() {
    this.initializeSendGrid()
  }

  private initializeSendGrid() {
    const apiKey = process.env.SENDGRID_KEY
    console.log('*****************************************************')
    console.log('Env key: ', apiKey)
    console.log('SGmail: ', SGMail)
    console.log('*****************************************************')
    SGMail.setApiKey(apiKey)
  }

  async sendEmail(data: string, email: string): Promise<void> {
    const message: MailDataRequired = {
      to: email,
      from: 'automessage.ivan@gmail.com',
      subject: 'New Lead',
      html: data
    }

    SGMail.send(message)
      .then(() => console.log('EMAIL SENT'))
      .catch(e => console.log('EMAIL ERROR: ' + e.message))
  }
}