import { DataTypes, Model } from 'sequelize';

import { IUserRoles, TUserRolesAttributes } from './types';

import { Entity, EntityField } from '@app/decorators/entity';
import { User } from '@entities/user';

@Entity({
  tableName: 'roles',
  modelName: 'user_roles',
  timestamps: false,
})
export class UserRoles extends Model<IUserRoles, TUserRolesAttributes> {
  @EntityField({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate: { min: 0 },
  })
  declare id: number;

  @EntityField({
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @EntityField({
    type: new DataTypes.STRING(128),
    unique: true,
    allowNull: false,
  })
  declare slug: string;
}

UserRoles.hasMany(User, { foreignKey: 'role' });
User.belongsTo(UserRoles, { foreignKey: 'role' });

// User.sync();
