import { Request, Response } from "express";
import WorkerModel from "../models/workers.model";

const WorkerController = {
  async getWorkers(req: Request, res: Response): Promise<void> {
    try {
      const workers = await WorkerModel.getAllWorkers();
      res.json(workers);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter trabalhadores" });
    }
  },

  async getWorker(req: Request, res: Response): Promise<void> {
    try {
      const worker = await WorkerModel.getWorkerById(Number(req.params.id));
      if (worker) {
        res.json(worker);
      } else {
        res.status(404).json({ message: "Trabalhador não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o trabalhador" });
    }
  },

  async createWorker(req: Request, res: Response): Promise<void> {
    try {
      const newWorker = await WorkerModel.createWorker(req.body);
      res.status(201).json(newWorker);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o trabalhador" });
    }
  },

  async updateWorker(req: Request, res: Response): Promise<void> {
    try {
      const updatedWorker = await WorkerModel.updateWorker(
        Number(req.params.id),
        req.body
      );
      res.json(updatedWorker);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o trabalhador" });
    }
  },

  async deleteWorker(req: Request, res: Response): Promise<void> {
    try {
      await WorkerModel.deleteWorker(Number(req.params.id));
      res.json({ message: "Trabalhador deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o trabalhador" });
    }
  },
};

export default WorkerController;
