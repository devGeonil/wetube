// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {userRouter} from "./routers/userRouter";
import {videoRouter} from "./routers/videoRouter";
import {globalRouter} from "./routers/globalRouter";
import routes from "./routes";
import mongoose from "mongoose";
import MongStore from "connect-mongo";
import passport from "passport";
import session from "express-session"
import "./passport";
import {localsMiddleware} from "./middlewares";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const CookieStore = MongStore(session);

//set
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
//middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(session({
  secret:process.env.COOKIE_SECRET,
  resave:true,
  saveUninitialized:false,
  store : new CookieStore({mongooseConnection: mongoose.connection})
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware)


//routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


//module.exports = app;
export default app;
