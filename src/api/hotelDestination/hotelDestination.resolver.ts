import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'

import { HotelDestination, HotelDestinationSelect } from './model'

import { HotelDestinationService } from './hotelDestination.service'

import { HotelDestinationArgs, HotelDestinationCreateInput } from './dto'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => HotelDestination)
export class HotelDestinationResolver {
  constructor(private readonly hotelDestinationService: HotelDestinationService) { }

  @Query(() => HotelDestination, { nullable: true })
  public async hotelDestination(
    @Args() args: HotelDestinationArgs,
    @GraphQLFields() { fields }: IGraphQLFields<HotelDestinationSelect>
  ): Promise<HotelDestination | null> {
    return this.hotelDestinationService.findOne(args, fields)
  }

  @Mutation(() => HotelDestination)
  public async createHotelDestination(
    @Args('data') data: HotelDestinationCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<HotelDestinationSelect>
  ): Promise<HotelDestination> {
    return this.hotelDestinationService.create(data, fields)
  }
}