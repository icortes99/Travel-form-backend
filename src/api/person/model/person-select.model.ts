import { PassengersSelect } from 'src/api/passengers/model'

interface PersonPrismaSelect {
    id?: boolean
    uuid?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    passengers?: PassengersSelect
}

export interface PersonSelect {
    select?: PersonPrismaSelect
}