import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text:{
    type:String,
    require:"Text is required"
  },
  createAt:{
    type:Date,
    default:Date.now
  }
})

const model =mongoose.model("Commnet", CommentSchema);
export default model;
