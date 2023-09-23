import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { TravelAgency, TravelAgencySelect } from './model'

import { TravelAgencyArgs, TravelAgencyCreateInput } from './dto'

import { TravelAgencyService } from './travel-agency.service'

import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'

@Resolver(() => TravelAgency)
export class TravelAgencyResolver {
  constructor(private readonly travelAgencyService: TravelAgencyService) { }

  @Query(() => TravelAgency, { nullable: true })
  public async travelAgency(
    @Args() args: TravelAgencyArgs,
    @GraphQLFields() { fields }: IGraphQLFields<TravelAgencySelect>,
  ): Promise<TravelAgency | null> {
    return this.travelAgencyService.findOne(args, fields)
  }

  @Query(() => TravelAgency, { nullable: true })
  public async travelAgencyTemplates(
    @Args() args: TravelAgencyArgs,
    @GraphQLFields() { fields }: IGraphQLFields<TravelAgencySelect>
  ): Promise<TravelAgency | null> {
    return this.travelAgencyService.findOneTemplate(args, fields)
  }

  @Mutation(() => TravelAgency)
  public async createTravelAgency(
    @Args('data') data: TravelAgencyCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<TravelAgencySelect>,
  ): Promise<TravelAgency> {
    return this.travelAgencyService.create(data, fields)
  }
}