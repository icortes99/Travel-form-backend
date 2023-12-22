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

    //convertir data
    /*
    {
    "parent": { "database_id": "220f146bb2af4bf9a5d4954fea29dd56" },
    "icon": {
        "emoji": "🥬"
    },
    "cover": {
        "external": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
        }
    },
    "properties": {
        "Name": {
            "title": [
                {
                    "text": {
                        "content": "Tuscan Kale"
                    }
                }
            ]
        },
    "Description": {
      "rich_text": [
        {
          "text": {
            "content": "A dark green leafy vegetable"
          }
        }
      ]
    },
    "Price": { "number": 2.5 }
  },
  "children": [
    {
      "object": "block",
      "type": "heading_2",
      "heading_2": {
        "rich_text": [{ "type": "text", "text": { "content": "Lacinato kale" } }]
      }
    },
    {
      "object": "block",
      "type": "paragraph",
      "paragraph": {
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": "Lacinato kale is a variety of kale with a long tradition",
              "link": { "url": "https://en.wikipedia.org/wiki/Lacinato_kale" }
            }
          }
        ]
      }
    }
  ]
}
    */

    fetch(notion.url, {
      method: 'POST',
      headers: headers,
      body: ''
    })
      .then(() => console.log('notion registered'))
      .catch(e => console.log(e))
  }
}