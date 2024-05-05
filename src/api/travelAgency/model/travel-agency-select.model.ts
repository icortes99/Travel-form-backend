import { ApplicationSelect } from 'src/api/application/model'

import { UserSelect } from 'src/api/user/model'

interface TravelAgencyPrismaSelect {
  id?: boolean
  uuid?: boolean
  slug?: boolean
  ownerId?: boolean
  name?: boolean
  website?: boolean
  logo?: boolean
  owner?: UserSelect
  applications?: ApplicationSelect
  createdAt?: boolean
  updatedAt?: boolean
}

export interface TravelAgencySelect {
  select?: TravelAgencyPrismaSelect
}