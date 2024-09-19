import { PrismaClient, Applications } from "@prisma/client";

const prisma = new PrismaClient();

interface ApplicationData {
  postId: number;
  workerId: number;
  mensagem?: string;
}

const ApplicationModel = {
  async getAllApplications(): Promise<Applications[]> {
    return prisma.applications.findMany();
  },

  async getApplicationById(id: number): Promise<Applications | null> {
    return prisma.applications.findUnique({
      where: { id },
    });
  },

  async createApplication(data: ApplicationData): Promise<Applications> {
    return prisma.applications.create({
      data,
    });
  },

  async updateApplication(
    id: number,
    data: Partial<ApplicationData>
  ): Promise<Applications> {
    return prisma.applications.update({
      where: { id },
      data,
    });
  },

  async deleteApplication(id: number): Promise<Applications> {
    return prisma.applications.delete({
      where: { id },
    });
  },
};

export default ApplicationModel;
