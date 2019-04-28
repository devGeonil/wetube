// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {userRouter} from "./routers/userRouter";
import {videoRouter} from "./routers/videoRouter";
import {globalRouter} from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleware} from "./middlewares";

const app = express();

//set
app.set("view engine", "pug");

//middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(localsMiddleware)


//routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


//module.exports = app;
export default app;
