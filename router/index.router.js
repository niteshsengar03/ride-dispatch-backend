import express from "express";
import userRouter from "./user.router";

const Router = express.Router();

Router.use('/',userRouter);

export default Router;