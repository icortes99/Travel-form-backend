import { PersonSelect } from 'src/api/person/model'

interface UserPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  email?: boolean;
  personId?: boolean;
  photo?: boolean;
  phoneNumber?: boolean;
  person?: PersonSelect;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}