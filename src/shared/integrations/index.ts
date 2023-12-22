import { ApplicationCreateInput } from 'src/api/application/dto'

import { EmailStrategy } from './strategies/email.strategy'

import { NotionStrategy } from './strategies/notion.strategy'

import { IntegrationStrategy, StrategyParams } from './strategies/strategy'

export default class IntegrationManager {
  private strategies: Map<string, IntegrationStrategy> = new Map()

  constructor() {
    this.strategies.set('email', new EmailStrategy())
    this.strategies.set('notion', new NotionStrategy())
  }

  async executeIntegrations(preferences: string[], data: ApplicationCreateInput, strategyParams: StrategyParams): Promise<void> {
    for (const preference of preferences) {
      const strategy = this.strategies.get(preference)
      if (strategy) {
        await strategy.execute(data, strategyParams)
      }
    }
  }
}

export * from './strategies/strategy'