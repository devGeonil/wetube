import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController";
import {join, login, logout} from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get(routes.users , (req, res) => res.send("users"));
userRouter.get(routes.userDetail , (req, res) => res.send("userDetail"));
userRouter.get(routes.editProfile , (req, res) => res.send("editProfile"));
userRouter.get(routes.changePassword , (req, res) => res.send("changePassword"));
