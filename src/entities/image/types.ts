import { Optional } from 'sequelize';

export interface IImage {
  id: number;
  src: string;
  title: string;
  uploadedAt: Date;
}
export type TImageAttributes = Optional<IImage, 'id'>;
