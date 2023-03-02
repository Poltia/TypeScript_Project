import express from "express";
const app = express();
import cors from "cors";
import { sequelize } from "./models";
require("dotenv").config({ path: "env/back.env" });
// import dot from "dotenv";
// dot.config({ path: "env/back.env" });

// 프론트 연결 cors 처리
const options = {
  origin: process.env.DOMAIN,
  credentials: true,
};
app.use(cors(options));
console.log("process.env.DOMAIN :", process.env.DOMAIN);

// DB 연동
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결");
  })
  .catch((error) => {
    console.log("DB 연결 에러", error);
  });

// body 객체를 사용하기 위해 설정
app.use(express.urlencoded({ extended: false }));

// 객체 설정
app.use(express.json());

// 라우터 사용
import { routers } from "./routers";
Object.values(routers).forEach((router) => {
  app.use(router);
});
