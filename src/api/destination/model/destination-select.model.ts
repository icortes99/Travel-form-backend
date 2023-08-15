import { ApplicationSelect } from 'src/api/application/model'

import { AttractionSelect } from 'src/api/attraction/model'

import { HotelDestinationSelect } from 'src/api/hotelDestination/model'

interface DestinationPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  video?: boolean
  attractions?: AttractionSelect
  applications?: ApplicationSelect
  hotelDestinations?: HotelDestinationSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface DestinationSelect {
  select?: DestinationPrismaSelect
}