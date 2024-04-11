import { PostSrv } from "../services";

export class PostCtrl {
  static createPost = async (req, res) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res
          .status(400)
          .json({ message: "Title and content are required." });
      }

      const post = await PostSrv.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  static getAllPosts = async (req, res) => {
    try {
      const posts = await PostSrv.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static getPostById = async (req, res) => {
    try {
      const post = await PostSrv.getPostById(req.params.id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static deletePost = async (req, res) => {
    try {
      await PostSrv.deletePost(req.params.id);
      res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
