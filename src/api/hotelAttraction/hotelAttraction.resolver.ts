import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'

import { HotelAttraction, HotelAttractionSelect } from './model'

import { HotelAttractionService } from './hotelAttraction.service'

import { HotelAttractionArgs, HotelAttractionCreateInput } from './dto'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => HotelAttraction)
export class HotelAttractionResolver {
  constructor(private readonly hotelAttractionService: HotelAttractionService) { }

  @Query(() => HotelAttraction, { nullable: true })
  public async hotelDestination(
    @Args() args: HotelAttractionArgs,
    @GraphQLFields() { fields }: IGraphQLFields<HotelAttractionSelect>
  ): Promise<HotelAttraction | null> {
    return this.hotelAttractionService.findOne(args, fields)
  }

  @Query(() => [HotelAttraction], { nullable: true })
  public async hotelsInDestinationAgency(
    @Args() args: HotelAttractionArgs,
    @GraphQLFields() { fields }: IGraphQLFields<HotelAttractionSelect>
  ): Promise<HotelAttraction[] | null> {
    return this.hotelAttractionService.findHotels(args, fields)
  }

  @Mutation(() => HotelAttraction)
  public async createHotelDestination(
    @Args('data') data: HotelAttractionCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<HotelAttractionSelect>
  ): Promise<HotelAttraction> {
    return this.hotelAttractionService.create(data, fields)
  }
}