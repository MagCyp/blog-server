import { Post } from "../models";

export class PostSrv {
  static createPost = async (postData) => {
    const post = new Post(postData);
    await post.save();
    return post;
  };

  static updatePost = async (postId, updateData) => {
    const updatedPost = await Post.findByIdAndUpdate(postId, updateData, {
      new: true,
    });
    return updatedPost;
  };

  static getAllPosts = async () => {
    const posts = await Post.find({});
    return posts;
  };

  static getPostById = async (postId) => {
    const post = await Post.findById(postId);
    return post;
  };

  static deletePost = async (postId) => {
    await Post.findByIdAndDelete(postId);
  };
}
