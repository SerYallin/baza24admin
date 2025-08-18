import componentLoader, { Components } from './component-loader';

import usersResource from '@resources/users';
import rolesResource from '@resources/roles';
import productsResource from '@resources/products';
import ImagesResource from '@resources/images';
import TokensResource from '@resources/tokens';
import { ruRu } from '@locales/ruRu';
import { esEs } from '@locales/esEs';
import provider from '@admin/auth-provider';

export const options = {
  componentLoader,
  dashboard: {
    component: Components.Dashboard,
  },
  rootPath: '/',
  logoutPath: '/logout',
  loginPath: '/login',
  refreshTokenPath: '/refresh-token',
  resources: [
    usersResource,
    rolesResource,
    productsResource,
    ImagesResource,
    TokensResource,
  ],
  databases: [],
  locale: {
    language: 'ru',
    availableLanguages: ['es', 'ru'],
    localeDetection: true,
    withBackend: true,
    translations: {
      ru: ruRu,
      es: esEs,
    },
  },
};

export const authOptions = {
  cookiePassword: '1234567890',
  cookieName: 'baza24a',
  provider,
};

export const sessionOptions = {
  secret: '1234567890',
  resave: false,
  saveUninitialized: true,
};
