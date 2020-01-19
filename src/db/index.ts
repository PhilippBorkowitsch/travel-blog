import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'travel-blog',
  storage: './data.db',
});
