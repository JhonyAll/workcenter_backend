import { Request, Response } from "express";
import ApplicationModel from "../models/aplication.model";

const ApplicationController = {
  async getApplications(req: Request, res: Response): Promise<void> {
    try {
      const applications = await ApplicationModel.getAllApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter aplicações" });
    }
  },

  async getApplication(req: Request, res: Response): Promise<void> {
    try {
      const application = await ApplicationModel.getApplicationById(
        Number(req.params.id)
      );
      if (application) {
        res.json(application);
      } else {
        res.status(404).json({ message: "Aplicação não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter a aplicação" });
    }
  },

  async createApplication(req: Request, res: Response): Promise<void> {
    try {
      const newApplication = await ApplicationModel.createApplication(req.body);
      res.status(201).json(newApplication);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar a aplicação" });
    }
  },

  async updateApplication(req: Request, res: Response): Promise<void> {
    try {
      const updatedApplication = await ApplicationModel.updateApplication(
        Number(req.params.id),
        req.body
      );
      res.json(updatedApplication);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar a aplicação" });
    }
  },

  async deleteApplication(req: Request, res: Response): Promise<void> {
    try {
      await ApplicationModel.deleteApplication(Number(req.params.id));
      res.json({ message: "Aplicação deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar a aplicação" });
    }
  },
};

export default ApplicationController;
