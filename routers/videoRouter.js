import express from "express";
import routes from "../routes";
import { videoDetail, getUpload, postUpload } from "../controllers/videoController";
import {uploadVideo} from "../middlewares";

export const videoRouter = express.Router();

videoRouter.get(routes.videos , (req, res) => res.send("videos"));

videoRouter.get(routes.upload , getUpload);
videoRouter.post(routes.upload , uploadVideo,postUpload);






videoRouter.get(routes.videoDetail() , videoDetail);
videoRouter.get(routes.editVideo , (req, res) => res.send("editVideo"));
videoRouter.get(routes.deleteVideo , (req, res) => res.send("deleteVideo"));
