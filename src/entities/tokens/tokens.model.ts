import { Table, Column, Model } from 'sequelize-typescript';

import { ITokens } from './types';

@Table({
  modelName: 'tokens',
  tableName: 'tokens',
  timestamps: false,
})
export class TokensModel extends Model<ITokens> {
  @Column
  token: string;

  @Column
  user_id: number;
}
