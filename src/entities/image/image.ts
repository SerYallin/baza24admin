import { DataTypes, Model } from 'sequelize';

import { IImage, TImageAttributes } from './types';

import { Entity, EntityField } from '@app/decorators/entity';

@Entity({
  tableName: 'images',
  modelName: 'Image',
  timestamps: false,
})
export class Image extends Model<IImage, TImageAttributes> {
  @EntityField({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @EntityField({
    type: DataTypes.STRING,
    allowNull: false,
  })
  declare src: string;

  @EntityField({
    type: DataTypes.STRING,
    allowNull: true,
  })
  declare title: string;

  @EntityField({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  })
  declare uploadedAt: Date;
}
