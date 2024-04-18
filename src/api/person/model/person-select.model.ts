interface PersonPrismaSelect {
    id?: boolean
    uuid?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passengers?: boolean
}

export interface PersonSelect {
    select?: PersonPrismaSelect
}