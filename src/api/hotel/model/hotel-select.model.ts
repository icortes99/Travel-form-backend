import { AttractionSelect } from 'src/api/attraction/model'

import { ApplicationAttractionSelect } from 'src/api/applicationAttraction/model'

interface HotelPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  roomTypes?: boolean
  attraction?: AttractionSelect
  applicationAttractions?: ApplicationAttractionSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface HotelSelect {
  select?: HotelPrismaSelect
}