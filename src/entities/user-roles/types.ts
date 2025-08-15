import { Optional } from 'sequelize';

export interface IUserRoles {
  id: number;
  name: string;
  slug: string;
  password: string;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}
export type TUserRolesAttributes = Optional<IUserRoles, 'id'>;
