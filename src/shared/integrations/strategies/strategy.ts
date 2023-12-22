import { ApplicationCreateInput } from 'src/api/application/dto'

export interface StrategyParams {
  email?: {
    attractions: { destination: { id: number, uuid: string, name: string }, name: string }[]
    ownerEmail: string
  }
  notion?: {
    url: string
    authToken: string
    databaseId: string
  }
}

export interface IntegrationStrategy {
  execute(data: ApplicationCreateInput, strategyParams?: StrategyParams): Promise<void>
}