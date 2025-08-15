import { DataTypes, Model } from 'sequelize';

import { ITokens, TTokensAttributes } from './types';

import { Entity, EntityField } from '@app/decorators/entity';
import { User } from '@entities/user';

@Entity({
  tableName: 'tokens',
  modelName: 'tokens',
  timestamps: false,
})
export class Tokens extends Model<ITokens, TTokensAttributes> {
  @EntityField({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @EntityField({
    type: new DataTypes.STRING(128),
    allowNull: false,
  })
  declare token: string;

  @EntityField({
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  })
  declare user_id: number;
}

User.hasMany(Tokens, { foreignKey: 'user_id' });
Tokens.belongsTo(User, { foreignKey: 'user_id' });

// Tokens.sync();
