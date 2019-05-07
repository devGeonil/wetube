import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text:{
    type:String,
    require:"Text is required"
  },
  createAt:{
    type:Date,
    default:Date.now
  },
  creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

const model =mongoose.model("Commnet", CommentSchema);
export default model;
