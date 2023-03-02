import express from "express";
import { UserController } from "../controllers";
import User from "../models/user";

const router = express.Router();

router.post("/join", UserController.join);
router.post("/login", UserController.login);

module.exports = router;
