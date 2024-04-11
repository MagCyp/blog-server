import { Request } from "express";

import { PostSrv } from "../services";
import { CustomResponse } from "../middlewares/respond";

export class PostCtrl {
  static createPost = async (req: Request, res: CustomResponse) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res.badRequest({ message: "Title and content are required." });
      }

      const post = await PostSrv.createPost(req.body);
      res.created({ data: post });
    } catch (error) {
      res.badRequest({ message: error.message });
    }
  };

  static updatePost = async (req: Request, res: CustomResponse) => {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res.badRequest({ message: "Title and content are required." });
      }

      const updatedPost = await PostSrv.updatePost(req.params.id, {
        title,
        content,
      });
      if (updatedPost) {
        res.accepted({ data: updatedPost });
      } else {
        res.notFound({ message: "Post not found" });
      }
    } catch (error) {
      res.internalServerError({ message: error.message });
    }
  };

  static getAllPosts = async (req: Request, res: CustomResponse) => {
    try {
      const posts = await PostSrv.getAllPosts();
      res.ok(posts);
    } catch (error) {
      res.internalServerError({ message: error.message });
    }
  };

  static getPostById = async (req: Request, res: CustomResponse) => {
    try {
      const post = await PostSrv.getPostById(req.params.id);
      if (post) {
        res.ok(post);
      } else {
        res.notFound({ message: "Post not found" });
      }
    } catch (error) {
      res.internalServerError({ message: error.message });
    }
  };

  static deletePost = async (req: Request, res: CustomResponse) => {
    try {
      await PostSrv.deletePost(req.params.id);
      res.ok({ message: "Post deleted" });
    } catch (error) {
      res.internalServerError({ message: error.message });
    }
  };
}
