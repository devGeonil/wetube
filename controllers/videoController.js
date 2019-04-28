export const home = (req, res) =>{
  res.render("home", {pageTitle : "Home"});
}

export const search = (req, res) => {
  res.render("search", {pageTitle : "Search"});
}

export const vidoes = (req, res) => {
  res.render("vidoes", {pageTitle : "Vidoes"});
}
export const upload = (req, res) => {
  res.render("upload", {pageTitle : "Upload"});
}
export const videoDetail = (req, res) => {
  res.render("videoDetail", {pageTitle : "VideoDetail"});
}
export const editVideo = (req, res) => {
  res.render("editVideo", {pageTitle : "EditVideo"});
}
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", {pageTitle : "DeleteVideo"});
}
