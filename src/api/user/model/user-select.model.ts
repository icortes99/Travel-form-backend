interface UserPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  email?: boolean;
  personId?: boolean;
  photo?: boolean;
  phoneNumber?: boolean;
  person?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}