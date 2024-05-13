import { ApplicationAttractionSelect } from 'src/api/applicationAttraction/model'

import { DestinationSelect } from 'src/api/destination/model'

import { PassengersSelect } from 'src/api/passengers/model'

import { TravelAgencySelect } from 'src/api/travelAgency/model'

import { UserSelect } from 'src/api/user/model'

interface ApplicationPrismaSelect {
  id?: boolean
  uuid?: boolean
  userId?: boolean
  travelAgencyId?: boolean
  destinationId?: boolean
  leadSource?: boolean
  userCurrentLocation?: boolean
  hasEntryPermission?: boolean
  startDate?: boolean
  endDate?: boolean
  tripObjective?: boolean
  contactPreference?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  user?: UserSelect
  travelAgency?: TravelAgencySelect
  destination?: DestinationSelect
  passengers?: PassengersSelect
  applicationAttractions?: ApplicationAttractionSelect
}

export interface ApplicationSelect {
  select?: ApplicationPrismaSelect
}