import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { Hotel, HotelSelect } from './model'

import { HotelArgs, HotelCreateInput } from './dto'

import { HotelService } from './hotel.service'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) { }

  @Query(() => Hotel, { nullable: true })
  public async hotel(
    @Args() args: HotelArgs,
    @GraphQLFields() { fields }: IGraphQLFields<HotelSelect>
  ): Promise<Hotel | null> {
    return this.hotelService.findOne(args, fields)
  }

  @Mutation(() => Hotel)
  public async createHotel(
    @Args('data') data: HotelCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<HotelSelect>
  ): Promise<Hotel> {
    return this.hotelService.create(data, fields)
  }
}