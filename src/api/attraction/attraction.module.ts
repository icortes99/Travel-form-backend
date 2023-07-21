import { Module } from '@nestjs/common'

import { AttractionService } from './attraction.service'

import { AttractionResolver } from './attraction.resolver'

@Module({
  imports: [],
  providers: [AttractionResolver, AttractionService],
  exports: [AttractionResolver, AttractionService]
})
export class AttractionModule { }