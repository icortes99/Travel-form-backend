import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { Application, ApplicationSelect } from './model'

import { ApplicationArgs, ApplicationCreateInput } from './dto'

import { ApplicationService } from './application.service'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => Application)
export class ApplicationResolver {
  constructor(private readonly applicationService: ApplicationService) { }

  @Query(() => Application, { nullable: true })
  public async application(
    @Args() args: ApplicationArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ApplicationSelect>
  ): Promise<Application | null> {
    return this.applicationService.findOne(args, fields)
  }

  @Mutation(() => Application)
  public async createApplication(
    @Args('data') data: ApplicationCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ApplicationSelect>
  ): Promise<Application> {
    return this.applicationService.create(data, fields)
  }
}