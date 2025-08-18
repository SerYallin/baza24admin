import { ResourceWithOptions } from 'adminjs';

import { TokensModel } from '@entities/tokens';

const tokens: ResourceWithOptions = {
  resource: TokensModel,
  options: {
    id: 'tokens',
    navigation: {
      name: 'Administration',
    },
    properties: {
      id: {
        type: 'number',
        isVisible: { list: true, filter: false, show: true, edit: false },
      },
      token: {
        type: 'string',
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      user_id: {
        type: 'number',
        isVisible: { list: true, filter: true, show: true, edit: true },
        reference: 'users',
      },
    },
    listProperties: ['id', 'token', 'user_id'],
    actions: {
      list: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
      show: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
      edit: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
      new: {
        isAccessible: () => false,
      },
      delete: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
      search: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
      bulkDelete: {
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
      },
    },
  },
};

export default tokens;
