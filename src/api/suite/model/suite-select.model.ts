import { HotelSelect } from 'src/api/hotel/model'

import { PassengersSelect } from 'src/api/passengers/model'

interface SuitePrismaSelect {
  id?: boolean
  uuid?: boolean
  hotelId?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  feePerAdult?: boolean
  feePerKid?: boolean
  basedPrice?: boolean
  hotel?: HotelSelect
  passengers?: PassengersSelect
}

export interface SuiteSelect {
  select?: SuitePrismaSelect
}