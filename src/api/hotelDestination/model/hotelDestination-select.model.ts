import { DestinationSelect } from 'src/api/destination/model'

import { HotelSelect } from 'src/api/hotel/model'

import { TravelAgencySelect } from 'src/api/travelAgency/model'

interface HotelDestinationPrismaSelect {
  hotelId?: boolean
  destinationId?: boolean
  travelAgencyId?: boolean
  hotel?: HotelSelect
  destination?: DestinationSelect
  travelAgency?: TravelAgencySelect
}

export interface HotelDestinationSelect {
  select?: HotelDestinationPrismaSelect
}