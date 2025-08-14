import { ResourceWithOptions } from 'adminjs';

import { UserRoles } from '@entities/user-roles';

// @ts-ignore
const roles: ResourceWithOptions = {
  resource: UserRoles,
  options: {
    id: 'roles',
    navigation: {
      name: 'Administration',
      icon: 'User',
    },
    properties: {
      id: {
        type: 'number',
        isVisible: { list: true, filter: false, show: true, edit: false },
      },
      name: {
        type: 'string',
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      slug: {
        type: 'string',
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
    },
    listProperties: ['id', 'name', 'slug'],
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
        isAccessible: (currentAdmin) => currentAdmin.currentAdmin?.role === 1,
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

export default roles;
