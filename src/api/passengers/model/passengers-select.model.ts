import { ApplicationSelect } from 'src/api/application/model'

import { PersonSelect } from 'src/api/person/model'

import { SuiteSelect } from 'src/api/suite/model'

interface PassengersPrismaSelect {
  suiteId?: boolean
  personId?: boolean
  applicationId?: boolean
  suite?: SuiteSelect
  person?: PersonSelect
  application?: ApplicationSelect
  roomAssigned?: boolean
}

export interface PassengersSelect {
  select?: PassengersPrismaSelect
}