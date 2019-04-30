import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController";
import {join, login, logout, users, userDetail, editProfile, changePassword} from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get(routes.editProfile , editProfile);
userRouter.get(routes.changePassword , changePassword);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.users , users);
