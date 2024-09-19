import { PrismaClient, Diplomas } from "@prisma/client";

const prisma = new PrismaClient();

interface DiplomaData {
  workerId: number;
  titulo: string;
  instituicao?: string;
  anoConclusao?: number;
}

const DiplomaModel = {
  async getAllDiplomas(): Promise<Diplomas[]> {
    return prisma.diplomas.findMany();
  },

  async getDiplomaById(id: number): Promise<Diplomas | null> {
    return prisma.diplomas.findUnique({
      where: { id },
    });
  },

  async createDiploma(data: DiplomaData): Promise<Diplomas> {
    return prisma.diplomas.create({
      data,
    });
  },

  async updateDiploma(
    id: number,
    data: Partial<DiplomaData>
  ): Promise<Diplomas> {
    return prisma.diplomas.update({
      where: { id },
      data,
    });
  },

  async deleteDiploma(id: number): Promise<Diplomas> {
    return prisma.diplomas.delete({
      where: { id },
    });
  },
};

export default DiplomaModel;
