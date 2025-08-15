import { Optional } from 'sequelize';

export interface ITokens {
  id: number;
  token: string;
  user_id: number;
}
export type TTokensAttributes = Optional<ITokens, 'id'>;
