import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Post = model("Post", PostSchema);

export {Post};