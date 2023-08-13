import { Module } from '@nestjs/common'

import { SuiteResolver } from './suite.resolver'

import { SuiteService } from './suite.service'

@Module({
  imports: [],
  providers: [SuiteResolver, SuiteService],
  exports: [SuiteResolver, SuiteService]
})
export class SuiteModule { }