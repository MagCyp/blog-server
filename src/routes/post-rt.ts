import * as express from "express";

import { PostCtrl } from "../controllers";

const postRt = express.Router();

postRt.post("/posts", PostCtrl.createPost);
postRt.get("/posts", PostCtrl.getAllPosts);
postRt.get("/posts/:id", PostCtrl.getPostById);
postRt.delete("/posts/:id", PostCtrl.deletePost);

export { postRt };
