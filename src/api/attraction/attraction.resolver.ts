import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { Attraction, AttractionSelect } from './model'

import { AttractionArgs, AttractionCreateInput } from './dto'

import { AttractionService } from './attraction.service'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => Attraction)
export class AttractionResolver {
  constructor(private readonly attractionService: AttractionService) { }

  @Query(() => Attraction, { nullable: true })
  public async attraction(
    @Args() args: AttractionArgs,
    @GraphQLFields() { fields }: IGraphQLFields<AttractionSelect>
  ): Promise<Attraction | null> {
    return this.attractionService.findOne(args, fields)
  }

  @Mutation(() => Attraction)
  public async createAttraction(
    @Args('data') data: AttractionCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<AttractionSelect>
  ): Promise<Attraction> {
    return this.attractionService.create(data, fields)
  }
}