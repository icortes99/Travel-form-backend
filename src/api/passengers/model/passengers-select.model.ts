import { ApplicationSelect } from 'src/api/application/model'

import { PersonSelect } from 'src/api/person/model'

interface PassengersPrismaSelect {
  suiteId?: boolean
  personId?: boolean
  applicationId?: boolean
  person?: PersonSelect
  application?: ApplicationSelect
  roomAssigned?: boolean
}

export interface PassengersSelect {
  select?: PassengersPrismaSelect
}