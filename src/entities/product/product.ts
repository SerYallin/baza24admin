import { Model, DataTypes } from 'sequelize';

import { IProduct, ProductCreationAttributes } from './types';

import { Entity, EntityField } from '@app/decorators/entity/entity';

@Entity({
  tableName: 'products',
  modelName: 'Product',
})
export class Product extends Model<IProduct, ProductCreationAttributes> {
  @EntityField({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @EntityField({
    type: DataTypes.STRING,
  })
  declare title: string;

  @EntityField({
    type: DataTypes.STRING,
  })
  declare slug: string;

  @EntityField({
    type: DataTypes.TEXT,
  })
  declare description?: string | undefined;

  @EntityField({
    type: DataTypes.DECIMAL(10, 2),
  })
  declare price?: number | null;

  @EntityField({
    type: DataTypes.TEXT,
  })
  declare composition?: string | undefined;

  @EntityField({
    type: DataTypes.STRING,
  })
  declare height?: string | undefined;

  @EntityField({
    type: DataTypes.INTEGER,
    references: {
      model: 'images',
      key: 'id',
    },
  })
  declare image: number;

  @EntityField({
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  })
  declare gallery?: number[];

  @EntityField({
    type: DataTypes.INTEGER,
  })
  declare type?: number | null;

  @EntityField({
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  })
  declare categories?: number[];

  @EntityField({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  })
  declare createdAt: Date;

  @EntityField({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  })
  declare updatedAt: Date;
}

// Product.sync({ force: true });
