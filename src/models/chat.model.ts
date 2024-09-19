import { PrismaClient, Chats } from "@prisma/client";

const prisma = new PrismaClient();

interface ChatData {
  userComumId: number;
  workerId: number;
}

const ChatModel = {
  async getAllChats(): Promise<Chats[]> {
    return prisma.chats.findMany();
  },

  async getChatById(id: number): Promise<Chats | null> {
    return prisma.chats.findUnique({
      where: { id },
    });
  },

  async createChat(data: ChatData): Promise<Chats> {
    return prisma.chats.create({
      data,
    });
  },

  async updateChat(id: number, data: Partial<ChatData>): Promise<Chats> {
    return prisma.chats.update({
      where: { id },
      data,
    });
  },

  async deleteChat(id: number): Promise<Chats> {
    return prisma.chats.delete({
      where: { id },
    });
  },
};

export default ChatModel;
