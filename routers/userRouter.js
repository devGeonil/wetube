import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController";
import {join, login, logout, users, userDetail, editProfile, changePassword} from "../controllers/userController";
import {onlyPrivate} from "../middlewares";
export const userRouter = express.Router();

userRouter.get(routes.editProfile , onlyPrivate, editProfile);
userRouter.get(routes.changePassword ,onlyPrivate,  changePassword);
userRouter.get(routes.userDetail(),onlyPrivate,  userDetail);
userRouter.get(routes.users , users);
