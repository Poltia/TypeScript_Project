import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "typescript_project",
    host: process.env.HOST,
    dialect: "mysql",
  },
};
