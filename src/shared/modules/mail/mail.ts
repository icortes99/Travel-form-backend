import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
  async sendEmail(data: string, email: string): Promise<void> { }
}