import "dotenv/config";
import { Sequelize } from "sequelize";

export default new Sequelize(process.env.DATABASE_URL, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_CONNECTION,
});
