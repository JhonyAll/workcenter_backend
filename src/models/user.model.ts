import { PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();

interface UserData {
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: "COMUM" | "TRABALHADOR";
  telefone?: string;
  endereco?: string;
}

const UserModel = {
  async getAllUsers(): Promise<Users[]> {
    return prisma.users.findMany();
  },

  async getUserById(id: number): Promise<Users | null> {
    return prisma.users.findUnique({
      where: { id },
    });
  },

  async createUser(data: UserData): Promise<Users> {
    return prisma.users.create({
      data,
    });
  },

  async updateUser(id: number, data: Partial<UserData>): Promise<Users> {
    return prisma.users.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: number): Promise<Users> {
    return prisma.users.delete({
      where: { id },
    });
  },
};

export default UserModel;
