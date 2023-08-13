import { PassengersSelect } from "src/api/passengers/model"

interface SuitePrismaSelect {
  id?: boolean
  uuid?: boolean
  hotelId?: boolean
  name?: boolean
  description?: boolean
  images?: boolean
  feePerAdult?: boolean
  feePerKid?: boolean
  basedPrice?: boolean
  hotel?: boolean
  passengers?: PassengersSelect
}

export interface SuiteSelect {
  select?: SuitePrismaSelect
}