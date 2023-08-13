interface AttractionPrismaSelect {
  id?: boolean
  uuid?: boolean
  destinationId?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  travelDuration?: boolean
  travelDistance?: boolean
  destination?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}
export interface AttractionSelect {
  select?: AttractionPrismaSelect
}