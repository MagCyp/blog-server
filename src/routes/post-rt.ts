import * as express from "express";

import { PostCtrl } from "../controllers";

const router = express.Router();

router.post("/posts", PostCtrl.createPost);
router.patch("/posts/:id", PostCtrl.updatePost);
router.get("/posts", PostCtrl.getAllPosts);
router.get("/posts/:id", PostCtrl.getPostById);
router.delete("/posts/:id", PostCtrl.deletePost);

export { router };
