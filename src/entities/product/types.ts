import { Optional } from 'sequelize';

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  description?: string | undefined;
  price?: number | null;
  composition?: string | undefined;
  height?: string | undefined;
  image: number;
  gallery?: number[];
  type?: number | null;
  categories?: number[];
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export type ProductCreationAttributes = Optional<IProduct, 'id'>;
