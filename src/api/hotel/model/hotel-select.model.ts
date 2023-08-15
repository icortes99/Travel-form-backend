import { HotelDestinationSelect } from 'src/api/hotelDestination/model'

import { SuiteSelect } from 'src/api/suite/model'

interface HotelPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  suites?: SuiteSelect
  hotelDestinations?: HotelDestinationSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface HotelSelect {
  select?: HotelPrismaSelect
}