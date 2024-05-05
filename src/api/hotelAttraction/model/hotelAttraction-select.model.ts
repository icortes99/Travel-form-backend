import { AttractionSelect } from 'src/api/attraction/model'

import { HotelSelect } from 'src/api/hotel/model'

interface HotelAttractionPrismaSelect {
  hotelId?: boolean
  attractionId?: boolean
  hotel?: HotelSelect
  attraction?: AttractionSelect
}

export interface HotelAttractionSelect {
  select?: HotelAttractionPrismaSelect
}