interface ApplicationPrismaSelect {
  id?: boolean
  uuid?: boolean
  userId?: boolean
  travelAgencyId?: boolean
  destinationId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  user?: boolean
  travelAgency?: boolean
  destination?: boolean
  companions?: boolean
}

export interface ApplicationSelect {
  select?: ApplicationPrismaSelect
}