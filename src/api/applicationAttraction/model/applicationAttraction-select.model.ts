import { ApplicationSelect } from 'src/api/application/model'

import { AttractionSelect } from 'src/api/attraction/model'

import { HotelSelect } from 'src/api/hotel/model'

interface ApplicationAttractionPrismaSelect {
  id?: boolean
  uuid?: boolean
  startDate?: boolean
  endDate?: boolean
  application?: ApplicationSelect
  attraction?: AttractionSelect
  hotel?: HotelSelect
}

export interface ApplicationAttractionSelect {
  select?: ApplicationAttractionPrismaSelect
}