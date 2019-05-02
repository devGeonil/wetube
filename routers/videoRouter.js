import express from "express";
import routes from "../routes";
import { videoDetail, getUpload, postUpload, getEditVideo, postEditVideo,deleteVideo } from "../controllers/videoController";
import {uploadVideo} from "../middlewares";

export const videoRouter = express.Router();

videoRouter.get(routes.videos , (req, res) => res.send("videos"));

videoRouter.get(routes.upload , getUpload);
videoRouter.post(routes.upload , uploadVideo,postUpload);

videoRouter.get(routes.editVideo() ,  getEditVideo);
videoRouter.post(routes.editVideo() ,  postEditVideo);




videoRouter.get(routes.videoDetail() , videoDetail);


videoRouter.get(routes.deleteVideo() , deleteVideo);
