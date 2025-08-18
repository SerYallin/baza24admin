/**
 * @file
 *  The entity decorators for the sequelize models.
 *  For more information about sequelize models, see:
 *  https://sequelize.org/docs/v6/category/core-concepts/
 */
import {
  Model,
  ModelAttributeColumnOptions,
  ModelOptions,
  ModelStatic,
} from 'sequelize';

import { sequelize } from '@db/sequelize';

/**
 * Entity decorator.
 *
 * @param {ModelOptions} options
 *   Sequelize model options for the entity.
 */
function Entity<T extends ModelStatic<Model>>(options: ModelOptions) {
  return function (target: T) {
    const attributes = Object.getOwnPropertyDescriptor(target, 'tmpAttributes');
    // Run the model init method for attributes and options.
    target.init(attributes?.value ?? {}, {
      sequelize,

      ...options,
    });
  };
}

/**
 * Entity field decorator.
 *
 * @param {ModelAttributeColumnOptions} options
 *   Sequelize model attribute options for description field data,
 *   validation and abilities.
 */
function EntityField<T extends Model>(options: ModelAttributeColumnOptions) {
  return function (target: T, key: string) {
    // If tmpAttributes is not defined, create it
    if (!Object.hasOwnProperty.call(target.constructor, 'tmpAttributes')) {
      Object.defineProperty(target.constructor, 'tmpAttributes', {
        writable: true,
        configurable: true,
        enumerable: true,
        value: {},
      });
    }
    const attributes = Object.getOwnPropertyDescriptor(
      target.constructor,
      'tmpAttributes',
    );
    Object.assign(attributes?.value, { [key]: options });
  };
}

export { Entity, EntityField };
