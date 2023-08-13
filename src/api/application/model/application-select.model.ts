import { PassengersSelect } from "src/api/passengers/model"

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
  user?: boolean
  travelAgency?: boolean
  destination?: boolean
  passengers?: PassengersSelect
}

export interface ApplicationSelect {
  select?: ApplicationPrismaSelect
}