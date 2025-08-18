import { ResourceWithOptions } from 'adminjs';

import { Image } from '@entities/image';
import { Components } from '@admin/component-loader';

const images: ResourceWithOptions = {
  resource: Image,
  options: {
    id: 'images',
    navigation: {
      name: 'Media',
      icon: 'Image',
    },
    properties: {
      src: {
        type: 'string',
        isRequired: true,
        components: {
          edit: Components.UploadField,
        },
      },
      uploadedAt: {
        type: 'date',
        isVisible: { list: true, filter: false, show: true, edit: false },
      },
    },
  },
};

export default images;
