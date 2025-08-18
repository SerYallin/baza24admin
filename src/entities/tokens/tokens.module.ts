import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TokensModel } from './tokens.model';

@Module({
  imports: [SequelizeModule.forFeature([TokensModel])],
  providers: [],
  exports: [],
})
export class TokensModule {}
