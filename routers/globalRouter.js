import express from "express";
import routes from "../routes";
import {home, search} from "../controllers/videoController";
import {getJoin, postJoin, getLogin, postLogin, logout,githubLogin,postGithubLogIn, getMe} from "../controllers/userController";
import {onlyPublic} from "../middlewares";
import passport from "passport";

export const globalRouter = express.Router();

globalRouter.get(routes.join , onlyPublic, getJoin);
globalRouter.post(routes.join , onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login , onlyPublic, getLogin);
globalRouter.post(routes.login , onlyPublic, postLogin);


globalRouter.get(routes.home , home);
globalRouter.get(routes.search , search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, passport.authenticate('github',{failureRedirect:routes.login}),
postGithubLogIn
);

globalRouter.get(routes.me, getMe);


globalRouter.get(routes.logout, logout);
