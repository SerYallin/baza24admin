import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';

import { IUser, TUserAttributes } from './types';

import { Entity, EntityField } from '@app/decorators/entity';

@Entity({
  tableName: 'users',
  modelName: 'user',
  hooks: {
    beforeUpdate(user) {
      user.setDataValue('updatedAt', new Date());
    },
  },
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
})
export class User extends Model<IUser, TUserAttributes> {
  @EntityField({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @EntityField({
    type: DataTypes.STRING,
    allowNull: false,
  })
  declare name: string;

  @EntityField({
    type: new DataTypes.STRING(128),
    unique: true,
    validate: {
      isEmail: {
        msg: 'Email is invalid',
      },
    },
    allowNull: false,
  })
  declare email: string;

  @EntityField({
    type: new DataTypes.STRING(128),
    set(val: string) {
      this.setDataValue('password', bcrypt.hashSync(val, 12));
    },
    allowNull: false,
  })
  declare password: string;

  @EntityField({
    type: DataTypes.INTEGER,
    defaultValue: 4,
    allowNull: true,
    references: {
      model: 'roles',
      key: 'id',
    },
  })
  declare role: string;

  @EntityField({
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  })
  declare createdAt: string;

  @EntityField({
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  })
  declare updatedAt: string;
}

// User.sync();
