import { Request, Response } from "express";
import CommentModel from "../models/comment.model";

const CommentController = {
  async getComments(req: Request, res: Response): Promise<void> {
    try {
      const comments = await CommentModel.getAllComments();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter comentários" });
    }
  },

  async getComment(req: Request, res: Response): Promise<void> {
    try {
      const comment = await CommentModel.getCommentById(Number(req.params.id));
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ message: "Comentário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o comentário" });
    }
  },

  async createComment(req: Request, res: Response): Promise<void> {
    try {
      const newComment = await CommentModel.createComment(req.body);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o comentário" });
    }
  },

  async updateComment(req: Request, res: Response): Promise<void> {
    try {
      const updatedComment = await CommentModel.updateComment(
        Number(req.params.id),
        req.body
      );
      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o comentário" });
    }
  },

  async deleteComment(req: Request, res: Response): Promise<void> {
    try {
      await CommentModel.deleteComment(Number(req.params.id));
      res.json({ message: "Comentário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o comentário" });
    }
  },
};

export default CommentController;
