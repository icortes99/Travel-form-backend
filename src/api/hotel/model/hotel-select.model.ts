interface HotelPrismaSelect {
  id?: boolean
  uuid?: boolean
  attractionId?: boolean
  name?: boolean
  description?: boolean
  location?: boolean
  image?: boolean
  price?: boolean
  attraction?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}
export interface HotelSelect {
  select?: HotelPrismaSelect
}