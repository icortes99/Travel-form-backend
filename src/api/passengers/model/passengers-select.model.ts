interface PassengersPrismaSelect {
  suiteId?: boolean
  personId?: boolean
  applicationId?: boolean
  suite?: boolean
  person?: boolean
  application?: boolean
}

export interface PassengersSelect {
  select?: PassengersPrismaSelect
}