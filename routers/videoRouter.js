import express from "express";
import routes from "../routes";
import { videoDetail, getUpload, postUpload, getEditVideo, postEditVideo,deleteVideo } from "../controllers/videoController";
import {uploadVideo, onlyPrivate} from "../middlewares";

export const videoRouter = express.Router();

videoRouter.get(routes.videos , (req, res) => res.send("videos"));

videoRouter.get(routes.upload , onlyPrivate, getUpload);
videoRouter.post(routes.upload ,onlyPrivate,  uploadVideo,postUpload);

videoRouter.get(routes.editVideo() , onlyPrivate,  getEditVideo);
videoRouter.post(routes.editVideo() , onlyPrivate,  postEditVideo);




videoRouter.get(routes.videoDetail() , videoDetail);


videoRouter.get(routes.deleteVideo() ,onlyPrivate,  deleteVideo);
