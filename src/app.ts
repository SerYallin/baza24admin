import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import * as AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

import 'module-alias/register';

import { requestLogger, errorLogger } from '@middlewares/logger';
import { authOptions, options, sessionOptions } from '@admin/options';
import { authentificate } from '@admin/authentificate';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const app = express();

const start = async () => {
  app.use(requestLogger);

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    admin.initialize();
  } else {
    admin.watch();
  }

  const routers = buildAuthenticatedRouter(
    admin,
    authOptions,
    null,
    sessionOptions
  );
  app.use(authentificate);
  app.use(admin.options.rootPath, routers);

  const PORT = process.env.PORT || 3000;
  app.use(errorLogger);
  app.listen(PORT, () => {
    console.info(`Server running at d http://localhost:${PORT}`);
  });
};

start();
