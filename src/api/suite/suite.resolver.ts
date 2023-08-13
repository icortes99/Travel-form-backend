import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { SuiteService } from './suite.service'

import { Suite, SuiteSelect } from './model'

import { SuiteArgs, SuiteCreateInput } from './dto'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver()
export class SuiteResolver {
  constructor(private readonly suiteService: SuiteService) { }

  @Query(() => Suite, { nullable: true })
  public async suite(
    @Args() args: SuiteArgs,
    @GraphQLFields() { fields }: IGraphQLFields<SuiteSelect>,
  ): Promise<Suite | null> {
    return this.suiteService.findOne(args, fields)
  }

  @Mutation(() => Suite)
  public async createSuite(
    @Args('data') data: SuiteCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<SuiteSelect>,
  ): Promise<Suite> {
    return this.suiteService.create(data, fields)
  }
}