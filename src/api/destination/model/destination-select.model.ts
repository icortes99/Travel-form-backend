import { ApplicationSelect } from 'src/api/application/model'

import { AttractionSelect } from 'src/api/attraction/model'

interface DestinationPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  video?: boolean
  attractions?: AttractionSelect
  applications?: ApplicationSelect
  createdAt?: boolean
  updatedAt?: boolean
}
export interface DestinationSelect {
  select?: DestinationPrismaSelect
}