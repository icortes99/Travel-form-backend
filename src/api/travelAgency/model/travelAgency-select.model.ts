interface TravelAgencyPrismaSelect {
  id?: boolean
  uuid?: boolean
  ownerId?: boolean
  name?: boolean
  website?: boolean
  logo?: boolean
  owner?: boolean
  applications?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export interface TravelAgencySelect {
  select?: TravelAgencyPrismaSelect
}