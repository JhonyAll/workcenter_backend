import { Request, Response } from "express";
import DiplomaModel from "../models/diploma.model";

const DiplomaController = {
  async getDiplomas(req: Request, res: Response): Promise<void> {
    try {
      const diplomas = await DiplomaModel.getAllDiplomas();
      res.json(diplomas);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter diplomas" });
    }
  },

  async getDiploma(req: Request, res: Response): Promise<void> {
    try {
      const diploma = await DiplomaModel.getDiplomaById(Number(req.params.id));
      if (diploma) {
        res.json(diploma);
      } else {
        res.status(404).json({ message: "Diploma não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o diploma" });
    }
  },

  async createDiploma(req: Request, res: Response): Promise<void> {
    try {
      const newDiploma = await DiplomaModel.createDiploma(req.body);
      res.status(201).json(newDiploma);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o diploma" });
    }
  },

  async updateDiploma(req: Request, res: Response): Promise<void> {
    try {
      const updatedDiploma = await DiplomaModel.updateDiploma(
        Number(req.params.id),
        req.body
      );
      res.json(updatedDiploma);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o diploma" });
    }
  },

  async deleteDiploma(req: Request, res: Response): Promise<void> {
    try {
      await DiplomaModel.deleteDiploma(Number(req.params.id));
      res.json({ message: "Diploma deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o diploma" });
    }
  },
};

export default DiplomaController;
