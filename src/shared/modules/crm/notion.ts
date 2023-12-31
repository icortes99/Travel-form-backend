import { Injectable } from '@nestjs/common'

import { ContactPreference, LeadSource, TripObjective } from '.prisma/client'

export interface NotionData {
  authToken: string
  databaseId: string
  url: string
  user: string
  email: string
  age: number
  phone?: number | string
  destiny: string
  attractions: string
  from: Date | string
  to: Date | string
  country: string
  leadSource: LeadSource
  contactPreference: ContactPreference
  tripObjective: TripObjective
  visa: boolean
  passengers: { name: string, age: number }[]
}

@Injectable()
export class NotionService {
  formatDate(date: Date | string): string {
    const input = typeof date === 'string' ? new Date(date) : date;

    if (!(input instanceof Date)) {
      throw new Error('Invalid date input')
    }

    const year = input.getFullYear()
    const month = (input.getMonth() + 1).toString().padStart(2, '0')
    const day = input.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  async updateNotion(data: NotionData): Promise<void> {
    const headers = {
      'Notion-Version': '2022-06-28',
      'Authorization': `Bearer ${data.authToken}`,
      'Content-Type': 'application/json'
    }

    const passengers = data.passengers.map(passenger => ({
      "object": "block",
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": `Name: ${passenger.name}. Age: ${passenger.age}`
            }
          }
        ]
      }
    }))

    const body = {
      "parent": { "database_id": data.databaseId },
      "icon": {
        "emoji": "🧲"
      },
      "properties": {
        "User": {
          "title": [
            {
              "text": {
                "content": `${data.user}`
              }
            }
          ]
        },
        "Email": {
          "email": `${data.email}`
        },
        "Age": { "number": data.age },
        "Phone": {
          "rich_text": [
            {
              "text": {
                "content": `${data?.phone ?? ''}`
              }
            }
          ]
        },
        "Passengers": { "number": data.passengers.length },
        "Destiny": {
          "rich_text": [
            {
              "text": {
                "content": data.destiny
              }
            }
          ]
        },
        "Attractions": {
          "rich_text": [
            {
              "text": {
                "content": data.attractions ?? 'No data'
              }
            }
          ]
        },
        "From": {
          "date": {
            "start": this.formatDate(data.from)
          }
        },
        "To": {
          "date": {
            "start": this.formatDate(data.to)
          }
        },
        "Country": {
          "rich_text": [
            {
              "text": {
                "content": data.country
              }
            }
          ]
        },
        "Lead Source": {
          "rich_text": [
            {
              "text": {
                "content": data.leadSource
              }
            }
          ]
        },
        "Contact Preference": {
          "rich_text": [
            {
              "text": {
                "content": data.contactPreference
              }
            }
          ]
        },
        "Trip Objective": {
          "rich_text": [
            {
              "text": {
                "content": data.tripObjective
              }
            }
          ]
        },
        "Visa": {
          "rich_text": [
            {
              "text": {
                "content": data.visa ? 'Yes' : 'No'
              }
            }
          ]
        }
      },
      "children": [
        {
          "object": "block",
          "type": "heading_2",
          "heading_2": {
            "rich_text": [{ "type": "text", "text": { "content": "Passengers" } }]
          }
        },
        ...passengers
      ]
    }

    await fetch(data.url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(res => console.log(res.isOk ? `NOTION ANSWER: ${res}` : 'NOTION ERROR'))
      .catch(e => console.log('NOTION ERROR: ' + e))
  }
}