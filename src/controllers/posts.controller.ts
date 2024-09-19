import { Request, Response } from "express";
import PostModel from "../models/posts.model";

const PostController = {
  async getPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await PostModel.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter posts" });
    }
  },

  async getPost(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostModel.getPostById(Number(req.params.id));
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: "Post não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o post" });
    }
  },

  async createPost(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await PostModel.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o post" });
    }
  },

  async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await PostModel.updatePost(
        Number(req.params.id),
        req.body
      );
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o post" });
    }
  },

  async deletePost(req: Request, res: Response): Promise<void> {
    try {
      await PostModel.deletePost(Number(req.params.id));
      res.json({ message: "Post deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o post" });
    }
  },
};

export default PostController;
