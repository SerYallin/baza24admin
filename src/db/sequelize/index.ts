import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:root@localhost:5432/baza24',
  {
    dialect: 'postgres',
  }
);
export { sequelize };
export default sequelize;
