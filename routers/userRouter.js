import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController";
import {
    join,
    login,
    logout,
    users,
    userDetail,
    getEditProfile,
    postEditProfile,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import {onlyPrivate, uploadAvatar} from "../middlewares";
export const userRouter = express.Router();

userRouter.get(routes.editProfile , onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile , onlyPrivate, uploadAvatar,postEditProfile);


userRouter.get(routes.changePassword ,onlyPrivate,  getChangePassword);
userRouter.post(routes.changePassword ,onlyPrivate,  postChangePassword);

userRouter.get(routes.userDetail(),onlyPrivate,  userDetail);
userRouter.get(routes.users , users);
