import { ApplicationSelect } from 'src/api/application/model'

import { HotelSelect } from 'src/api/hotel/model'

import { PersonSelect } from 'src/api/person/model'

interface PassengersPrismaSelect {
  suiteId?: boolean
  personId?: boolean
  applicationId?: boolean
  hotel?: HotelSelect
  person?: PersonSelect
  application?: ApplicationSelect
  roomAssigned?: boolean
}

export interface PassengersSelect {
  select?: PassengersPrismaSelect
}