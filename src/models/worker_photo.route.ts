import { PrismaClient, WorkerPhotos } from "@prisma/client";

const prisma = new PrismaClient();

interface WorkerPhotoData {
  workerId: number;
  fotoTrabalho: string;
  descricao?: string;
}

const WorkerPhotoModel = {
  async getAllWorkerPhotos(): Promise<WorkerPhotos[]> {
    return prisma.workerPhotos.findMany();
  },

  async getWorkerPhotoById(id: number): Promise<WorkerPhotos | null> {
    return prisma.workerPhotos.findUnique({
      where: { id },
    });
  },

  async createWorkerPhoto(data: WorkerPhotoData): Promise<WorkerPhotos> {
    return prisma.workerPhotos.create({
      data,
    });
  },

  async updateWorkerPhoto(
    id: number,
    data: Partial<WorkerPhotoData>
  ): Promise<WorkerPhotos> {
    return prisma.workerPhotos.update({
      where: { id },
      data,
    });
  },

  async deleteWorkerPhoto(id: number): Promise<WorkerPhotos> {
    return prisma.workerPhotos.delete({
      where: { id },
    });
  },
};

export default WorkerPhotoModel;
