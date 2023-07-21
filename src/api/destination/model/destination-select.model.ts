interface DestinationPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  video?: boolean
  attractions?: boolean
  applications?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}
export interface DestinationSelect {
  select?: DestinationPrismaSelect
}