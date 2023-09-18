import { ApplicationSelect } from 'src/api/application/model'

import { HotelDestinationSelect } from 'src/api/hotelDestination/model'

import { UserSelect } from 'src/api/user/model'

interface TravelAgencyPrismaSelect {
  id?: boolean
  uuid?: boolean
  ownerId?: boolean
  name?: boolean
  website?: boolean
  logo?: boolean
  owner?: UserSelect
  applications?: ApplicationSelect
  hotelDestinations?: HotelDestinationSelect
  createdAt?: boolean
  updatedAt?: boolean
}

export interface TravelAgencySelect {
  select?: TravelAgencyPrismaSelect
}