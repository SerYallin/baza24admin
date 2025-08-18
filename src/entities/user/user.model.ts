import { Table, Column, Model, IsEmail } from 'sequelize-typescript';
import bcrypt from 'bcrypt';

import { IUser } from './types';

@Table({
  modelName: 'user',
  tableName: 'users',
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
})
export class UserModel extends Model<IUser> {
  @Column
  name: string;

  @IsEmail
  @Column
  email: string;

  @Column
  set password(value: string) {
    this.setDataValue('password', bcrypt.hashSync(value, 12));
  }
  get password(): string {
    return this.getDataValue('password');
  }

  @Column
  role: number;
}
