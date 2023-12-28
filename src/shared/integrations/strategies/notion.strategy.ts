import { StrategyParams, IntegrationStrategy } from '../strategies/strategy'

import { ApplicationCreateInput } from 'src/api/application/dto'

export class NotionStrategy implements IntegrationStrategy {
  async execute(data: ApplicationCreateInput, strategyParams: StrategyParams): Promise<void> {
    const { notion } = strategyParams

    if (!notion) {
      throw new Error('Notion URL and Auth Token are required')
    }

    const headers = {
      'Notion-Version': '2022-06-28',
      'Authorization': `Bearer ${notion?.authToken}`,
      'Content-Type': 'application/json'
    }

    const passengers = data?.passengers?.create.map(passenger => ({
      "object": "block",
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": `Name: ${passenger?.person?.create?.firstName} ${passenger?.person?.create?.lastName}. Age: ${passenger?.person?.create?.birthdate}`
            }
          }
        ]
      }
    }))

    const body = {
      "parent": { "database_id": notion.databaseId },
      "icon": {
        "emoji": "🧲"
      },
      "properties": {
        "User": {
          "title": [
            {
              "text": {
                "content": `${data?.user?.create?.person?.create?.firstName} ${data?.user?.create?.person?.create?.lastName}`
              }
            }
          ]
        },
        "Email": {
          "rich_text": [
            {
              "text": {
                "content": data?.user?.create?.email
              }
            }
          ]
        },
        "Age": { "number": data?.user?.create?.person?.create?.birthdate },
        "Phone": {
          "rich_text": [
            {
              "text": {
                "content": data?.user?.create?.phoneNumber
              }
            }
          ]
        },
        "Passengers": { "number": data?.passengers?.create?.length },
        "Destiny": {
          "rich_text": [
            {
              "text": {
                "content": notion.destiny
              }
            }
          ]
        },
        "Attractions": {
          "rich_text": [
            {
              "text": {
                "content": notion?.attractions ?? 'No data'
              }
            }
          ]
        },
        "From": {
          "date": {
            "start": data?.startDate
          }
        },
        "To": {
          "date": {
            "start": data?.endDate
          }
        },
        "Country": {
          "rich_text": [
            {
              "text": {
                "content": data?.userCurrentLocation
              }
            }
          ]
        },
        "LeadSource": {
          "rich_text": [
            {
              "text": {
                "content": data?.leadSource
              }
            }
          ]
        },
        "Contact Preference": {
          "rich_text": [
            {
              "text": {
                "content": data?.contactPreference
              }
            }
          ]
        },
        "Trip Objective": {
          "rich_text": [
            {
              "text": {
                "content": data?.tripObjective
              }
            }
          ]
        },
        "Visa": {
          "rich_text": [
            {
              "text": {
                "content": data?.hasEntryPermission ? 'Yes' : 'No'
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
            "rich_text": [{ "type": "text", "text": { "content": "Lacinato kale" } }]
          }
        },
        ...passengers
      ]
    }

    fetch(notion.url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(() => console.log('notion registered'))
      .catch(e => console.log(e))
  }
}