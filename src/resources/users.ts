import { ResourceWithOptions } from 'adminjs';

import { User } from '@entities/user';
import { Components } from '@admin/component-loader';

const users: ResourceWithOptions = {
  resource: User,
  options: {
    navigation: {
      name: 'Administration',
      icon: 'Users',
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
      email: {
        type: 'string',
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      password: {
        type: 'string',
        isVisible: { list: false, filter: false, show: false, edit: true },
        isRequired: false,
      },
      role: {
        type: 'string',
        reference: 'roles',
        isVisible: { list: true, filter: true, show: true, edit: true },
        components: {
          list: Components.RoleLabel,
        },
      },
      createdAt: {
        type: 'date',
        isVisible: { list: true, filter: false, show: true, edit: false },
      },
      updatedAt: {
        type: 'date',
        isVisible: { list: false, filter: false, show: true, edit: false },
      },
    },
    listProperties: ['id', 'name', 'email', 'role', 'createdAt'],
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

export default users;
