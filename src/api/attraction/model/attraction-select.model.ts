import { ApplicationAttractionSelect } from 'src/api/applicationAttraction/model'

import { DestinationSelect } from 'src/api/destination/model'

import { HotelSelect } from 'src/api/hotel/model'

interface AttractionPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  destination?: DestinationSelect
  applicationAttractions?: ApplicationAttractionSelect
  hotels?: HotelSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface AttractionSelect {
  select?: AttractionPrismaSelect
}