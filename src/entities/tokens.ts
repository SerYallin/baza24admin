import { DataTypes } from 'sequelize';

import { sequelize } from '@db/sequelize';
import { User } from '@entities/user';

export const Tokens = sequelize.define(
  'Tokens',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    tableName: 'tokens',
    modelName: 'tokens',
    timestamps: false,
  }
);

User.hasMany(Tokens, { foreignKey: 'user_id' });
Tokens.belongsTo(User, { foreignKey: 'user_id' });

Tokens.sync();
