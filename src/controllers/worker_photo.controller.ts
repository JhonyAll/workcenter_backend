import { Request, Response } from "express";
import WorkerPhotoModel from "../models/worker_photo.route";

const WorkerPhotoController = {
  async getWorkerPhotos(req: Request, res: Response): Promise<void> {
    try {
      const workerPhotos = await WorkerPhotoModel.getAllWorkerPhotos();
      res.json(workerPhotos);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter fotos de trabalho" });
    }
  },

  async getWorkerPhoto(req: Request, res: Response): Promise<void> {
    try {
      const workerPhoto = await WorkerPhotoModel.getWorkerPhotoById(
        Number(req.params.id)
      );
      if (workerPhoto) {
        res.json(workerPhoto);
      } else {
        res.status(404).json({ message: "Foto de trabalho não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter a foto de trabalho" });
    }
  },

  async createWorkerPhoto(req: Request, res: Response): Promise<void> {
    try {
      const newWorkerPhoto = await WorkerPhotoModel.createWorkerPhoto(req.body);
      res.status(201).json(newWorkerPhoto);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar a foto de trabalho" });
    }
  },

  async updateWorkerPhoto(req: Request, res: Response): Promise<void> {
    try {
      const updatedWorkerPhoto = await WorkerPhotoModel.updateWorkerPhoto(
        Number(req.params.id),
        req.body
      );
      res.json(updatedWorkerPhoto);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar a foto de trabalho" });
    }
  },

  async deleteWorkerPhoto(req: Request, res: Response): Promise<void> {
    try {
      await WorkerPhotoModel.deleteWorkerPhoto(Number(req.params.id));
      res.json({ message: "Foto de trabalho deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar a foto de trabalho" });
    }
  },
};

export default WorkerPhotoController;
