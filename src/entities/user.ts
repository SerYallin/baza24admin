import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';

import { sequelize } from '@db/sequelize';

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email is invalid',
        },
      },
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      set(val: string) {
        this.setDataValue('password', bcrypt.hashSync(val, 12));
      },
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'users',
    modelName: 'user',
    hooks: {
      beforeUpdate(user, _options) {
        user.setDataValue('updatedAt', new Date());
      },
    },
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  }
);

// User.sync();
