import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) =>{
  try{
    const videos = await Video.find({}).sort({'_id':-1});
    res.render("home", {pageTitle : "Home",videos:videos});
  }catch(error){
    console.error(error);
    res.render("home", {pageTitle : "Home",videos:[]});
  }
}

export const search = async (req, res) => {
  const {query:{term:searchingBy}} = req;
  let videos = [];
  try {
    videos = await Video.find({title:{$regex: searchingBy, $options:"i"}})
  } catch (e) {
    console.error(e);
  } finally {
    res.render("search", {pageTitle : "Search", searchingBy, videos});
  }
}

export const vidoes = (req, res) => {
  res.render("vidoes", {pageTitle : "Vidoes"});
}

export const getUpload = (req, res) => {
  res.render("upload", {pageTitle : "Upload"});
}
export const postUpload = async (req, res) => {
  const {
    body:{title, description},
    file : {path}
  } = req;
  const newVideo = await Video.create({
    fileUrl:path,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo._id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = async (req, res) => {
  try{
    const {params:{id}} = req;
    const video = await Video.findById(id).populate('creator');
    res.render("videoDetail", {pageTitle : video.title, video});
  }catch(error){
    console.error(error);
    res.redirect(routes.home);
  }
}

export const getEditVideo = async (req, res) => {
  const {params:{id}}=req;
  try{
    const video = await Video.findById(id);
    if(String(video.creator) !== req.user.id){
      throw Error();
    }else{
      res.render("editVideo", {pageTitle : `Edit ${video.title}`, video});
    }
  }catch(error){
    console.error(error);
    res.redirect(routes.home);
  }
}

export const postEditVideo = async (req, res) => {
  const {params:{id:_id},body:{title,description}} = req;
  try{
    await Video.findOneAndUpdate({_id},{title,description});
    res.redirect(routes.videoDetail(_id));
  }catch(error){
    console.error(error);
    res.redirect(routes.home);
  }
}

export const deleteVideo = async (req, res) => {
  const {params:{id:_id}} = req;
  try{
    const video = await Video.findById(_id);
    if(String(video.creator) !== req.user.id){
      throw Error();
    }else{
      await Video.findOneAndRemove({_id});
    }
  }catch(error){
    console.error(error);
  }
  res.redirect(routes.home);
}

export const postRegisterView = async (req, res) =>{
  const {params:{id}} = req;
  try{

    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  }catch(error){
    console.error(error);
    res.status(400);
  }finally{
    res.end();
  }
}
