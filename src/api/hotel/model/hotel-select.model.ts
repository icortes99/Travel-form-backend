interface HotelPrismaSelect {
  id?: boolean
  uuid?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  suites?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}
export interface HotelSelect {
  select?: HotelPrismaSelect
}