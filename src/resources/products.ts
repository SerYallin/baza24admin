import { ResourceWithOptions } from 'adminjs';

import { Product } from '@entities/product';
import { Components } from '@admin/component-loader';

// @ts-ignore
const products: ResourceWithOptions = {
  resource: Product,
  options: {
    id: 'products',
    navigation: {
      name: 'Products',
      icon: 'Folder',
    },
    properties: {
      image: {
        type: 'number',
        isRequired: true,
        components: {
          edit: Components.UploadField,
        },
      },
      gallery: {
        components: {
          edit: Components.UploadMultipleField,
        },
      },
    },
  },
};

export default products;
