import { DataTypes } from 'sequelize';

import { User } from './user';

import sequelize from '@db/sequelize';

export const UserRoles = sequelize.define(
  'UserRoles',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      validate: { min: 0 },
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    slug: {
      type: new DataTypes.STRING(128),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'roles',
    modelName: 'user_roles',
    timestamps: false,
  }
);

UserRoles.hasMany(User, { foreignKey: 'role' });
User.belongsTo(UserRoles, { foreignKey: 'role' });

// UserRoles.sync();
