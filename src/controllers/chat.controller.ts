import { Request, Response } from "express";
import ChatModel from "../models/chat.model";

const ChatController = {
  async getChats(req: Request, res: Response): Promise<void> {
    try {
      const chats = await ChatModel.getAllChats();
      res.json(chats);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter chats" });
    }
  },

  async getChat(req: Request, res: Response): Promise<void> {
    try {
      const chat = await ChatModel.getChatById(Number(req.params.id));
      if (chat) {
        res.json(chat);
      } else {
        res.status(404).json({ message: "Chat não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter o chat" });
    }
  },

  async createChat(req: Request, res: Response): Promise<void> {
    try {
      const newChat = await ChatModel.createChat(req.body);
      res.status(201).json(newChat);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o chat" });
    }
  },

  async updateChat(req: Request, res: Response): Promise<void> {
    try {
      const updatedChat = await ChatModel.updateChat(
        Number(req.params.id),
        req.body
      );
      res.json(updatedChat);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar o chat" });
    }
  },

  async deleteChat(req: Request, res: Response): Promise<void> {
    try {
      await ChatModel.deleteChat(Number(req.params.id));
      res.json({ message: "Chat deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar o chat" });
    }
  },
};

export default ChatController;
