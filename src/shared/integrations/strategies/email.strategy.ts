import { MailerService } from '@nestjs-modules/mailer'

import { StrategyParams, IntegrationStrategy } from '../strategies/strategy'

import { ApplicationCreateInput } from 'src/api/application/dto'

import { getAge } from 'src/shared/util/refuse-by/age.input'

export class EmailStrategy implements IntegrationStrategy {
  private mailService: MailerService

  async execute(data: ApplicationCreateInput, strategyParams: StrategyParams): Promise<void> {
    const { email } = strategyParams

    if (!email) {
      throw new Error('No email address to send the data')
    }

    const passengersHTML = data.passengers?.create?.map((passenger, i) => (
      `<li>
        <h3>Passenger ${i + 1}:</h3>
        <p><strong>First Name:</strong> ${passenger.person.create.firstName}</p>
        <p><strong>Last Name:</strong> ${passenger.person.create.lastName}</p>
        <p><strong>Age:</strong> ${getAge(passenger.person.create.birthdate)}</p>
      </li>`
    ))

    const attractionsHTML = email?.attractions?.map((attraction) => (
      `<li><p>${attraction.name}</p></li>`
    ))

    const dates = {
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate)
    }

    const htmlBody = `
      <h1>New Lead Information</h1>

      <h2>User Information</h2>
      <p><strong>First Name:</strong> ${data.user.create.person.create.firstName}</p>
      <p><strong>Last Name:</strong> ${data.user.create.person.create.lastName}</p>
      <p><strong>Email:</strong> ${data.user.create.email}</p>
      <p><strong>Phone Number:</strong> ${data.user.create.phoneNumber}</p>
      <p><strong>Age:</strong> ${getAge(data.user.create.person.create.birthdate)}</p>
    
      <h2>Passengers Information</h2>
      <ul>
        ${passengersHTML}
      </ul>
      <br>

      <h2>Travel Information</h2>
      <p><strong>Destination:</strong> ${email?.attractions[0]?.destination?.name}</p>
      <h3>Attractions</h3>
      <ul>
        ${attractionsHTML}
      </ul>
      <br>
    
      <h2>Other Information</h2>
      <p><strong>Start Date:</strong> ${dates.startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
      <p><strong>End Date:</strong> ${dates.endDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
      <p><strong>User Current Location:</strong> ${data.userCurrentLocation}</p>
      <p><strong>Has Entry Permission:</strong> ${(data.hasEntryPermission === true) ? 'Yes' : 'No'}</p>
      <p><strong>Lead Source:</strong> ${data.leadSource}</p>
      <p><strong>Trip Objective:</strong> ${data.tripObjective}</p>
      <p><strong>Contact Preference:</strong> ${data.contactPreference}</p>
      <br>
    `

    const emailData = {
      to: 'cortes.ivan353@gmail.com',//ownerEmail,
      from: 'automessage.ivan@gmail.com',
      subject: 'New Lead information',
      html: htmlBody
    }

    this.mailService.sendMail(emailData).then(() => console.log('email sent')).catch((err) => console.log('error: ', err))
  }
}