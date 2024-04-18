import { ApplicationSelect } from 'src/api/application/model'

import { AttractionSelect } from 'src/api/attraction/model'

interface ApplicationAttractionPrismaSelect {
  id?: boolean
  uuid?: boolean
  startDate?: boolean
  endDate?: boolean
  application?: ApplicationSelect
  attraction?: AttractionSelect
}

export interface ApplicationAttractionSelect {
  select?: ApplicationAttractionPrismaSelect
}