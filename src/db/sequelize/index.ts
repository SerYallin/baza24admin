import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:root@localhost:5432/baza24',
  {
    dialect: 'postgres',
  }
);

sequelize.authenticate().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Unable to connect to the database:', err.message);
  process.exit(0);
});

export { sequelize };
export default sequelize;
