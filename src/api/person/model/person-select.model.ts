interface PersonPrismaSelect {
    id?: boolean
    name?: boolean
    last_name?: boolean
    birth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
}

export interface PersonSelect {
    select?: PersonPrismaSelect
}