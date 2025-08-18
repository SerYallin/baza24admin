import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel } from '@entities/user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [],
  exports: [],
})
export class UserModule {}
