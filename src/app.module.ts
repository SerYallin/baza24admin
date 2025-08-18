import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import * as AdminJSSequelize from '@adminjs/sequelize';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { getEntityModules } from '@utils/get-entity-modules';
import { authOptions, options, sessionOptions } from '@admin/options';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'baza24',
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    ...getEntityModules(),
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: options,
        auth: authOptions,
        sessionOptions,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
