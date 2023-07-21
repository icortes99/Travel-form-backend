import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { Destination, DestinationSelect } from './model'

import { DestinationArgs, DestinationCreateInput } from './dto'

import { DestinationService } from './destination.service'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => Destination)
export class DestinationResolver {
  constructor(private readonly destinationService: DestinationService) { }

  @Query(() => Destination, { nullable: true })
  public async destination(
    @Args() args: DestinationArgs,
    @GraphQLFields() { fields }: IGraphQLFields<DestinationSelect>
  ): Promise<Destination | null> {
    return this.destinationService.findOne(args, fields)
  }

  @Mutation(() => Destination)
  public async createDestination(
    @Args('data') data: DestinationCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<DestinationSelect>
  ): Promise<Destination> {
    return this.destinationService.create(data, fields)
  }
}