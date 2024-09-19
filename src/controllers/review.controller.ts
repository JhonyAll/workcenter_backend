import { Request, Response } from "express";
import ReviewModel from "../models/review.model";

const ReviewController = {
  async getReviews(req: Request, res: Response): Promise<void> {
    try {
      const reviews = await ReviewModel.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter avaliações" });
    }
  },

  async getReview(req: Request, res: Response): Promise<void> {
    try {
      const review = await ReviewModel.getReviewById(Number(req.params.id));
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ message: "Avaliação não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter a avaliação" });
    }
  },

  async createReview(req: Request, res: Response): Promise<void> {
    try {
      const newReview = await ReviewModel.createReview(req.body);
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar a avaliação" });
    }
  },

  async updateReview(req: Request, res: Response): Promise<void> {
    try {
      const updatedReview = await ReviewModel.updateReview(
        Number(req.params.id),
        req.body
      );
      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar a avaliação" });
    }
  },

  async deleteReview(req: Request, res: Response): Promise<void> {
    try {
      await ReviewModel.deleteReview(Number(req.params.id));
      res.json({ message: "Avaliação deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar a avaliação" });
    }
  },
};

export default ReviewController;
