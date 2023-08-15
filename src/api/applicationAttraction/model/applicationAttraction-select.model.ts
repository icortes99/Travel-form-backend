import { ApplicationSelect } from 'src/api/application/model'

import { AttractionSelect } from 'src/api/attraction/model'

interface ApplicationAttractionPrismaSelect {
  applicationId?: boolean
  attractionId?: boolean
  application?: ApplicationSelect
  attraction?: AttractionSelect
}

export interface ApplicationAttractionSelect {
  select?: ApplicationAttractionPrismaSelect
}