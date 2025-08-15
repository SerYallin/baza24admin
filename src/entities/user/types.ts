import { Optional } from 'sequelize';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}
export type TUserAttributes = Optional<IUser, 'id'>;
