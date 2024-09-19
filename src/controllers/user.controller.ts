import { Request, Response } from "express";
import UserModel from "../models/user.model";

const UserController = {
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter usuários" });
    }
  },

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserModel.getUserById(Number(req.params.id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o usuário" });
    }
  },

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser = await UserModel.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o usuário" });
    }
  },

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = await UserModel.updateUser(
        Number(req.params.id),
        req.body
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o usuário" });
    }
  },

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await UserModel.deleteUser(Number(req.params.id));
      res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o usuário" });
    }
  },
};

export default UserController;
