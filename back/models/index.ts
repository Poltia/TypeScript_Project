import { config } from "../config";
import { Sequelize } from "sequelize";
import User from "./user";

export const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  { host: config.dev.host, dialect: "mysql" }
);

const DB = {
  sequelize: sequelize,
  User: User,
};

Object.keys(DB).forEach((modelName) => {
  // 테이블 init 하기
  DB[modelName].init(sequelize);
  // 관계 설정 하기
  // DB[modelName].associate(DB);
});

module.exports = DB;
