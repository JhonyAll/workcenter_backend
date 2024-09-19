import { PrismaClient, Workers } from "@prisma/client";

const prisma = new PrismaClient();

interface WorkerData {
  userId: number;
  profissao: string;
  descricao?: string;
  experiencia?: number;
  avaliacaoMedia?: number;
  precoHora?: number;
  disponibilidade?: string;
  fotoPerfil?: string;
}

const WorkerModel = {
  async getAllWorkers(): Promise<Workers[]> {
    return prisma.workers.findMany();
  },

  async getWorkerById(id: number): Promise<Workers | null> {
    return prisma.workers.findUnique({
      where: { id },
    });
  },

  async createWorker(data: WorkerData): Promise<Workers> {
    return prisma.workers.create({
      data,
    });
  },

  async updateWorker(id: number, data: Partial<WorkerData>): Promise<Workers> {
    return prisma.workers.update({
      where: { id },
      data,
    });
  },

  async deleteWorker(id: number): Promise<Workers> {
    return prisma.workers.delete({
      where: { id },
    });
  },
};

export default WorkerModel;
