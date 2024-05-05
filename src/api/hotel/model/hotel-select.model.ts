import { HotelAttractionSelect } from 'src/api/hotelAttraction/model'

import { PassengersSelect } from 'src/api/passengers/model'

interface HotelPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  roomTypes?: boolean
  hotelAttractions?: HotelAttractionSelect
  passengers?: PassengersSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface HotelSelect {
  select?: HotelPrismaSelect
}