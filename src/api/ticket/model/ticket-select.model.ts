import { AttractionSelect } from 'src/api/attraction/model'

interface TicketPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  avgPrice?: boolean
  attraction?: AttractionSelect
}

export interface TicketSelect {
  select?: TicketPrismaSelect
}