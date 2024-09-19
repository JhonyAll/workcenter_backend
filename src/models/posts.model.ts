import { PrismaClient, Posts } from "@prisma/client";

const prisma = new PrismaClient();

interface PostData {
  userId: number;
  titulo: string;
  descricao: string;
  localizacao?: string;
}

const PostModel = {
  async getAllPosts(): Promise<Posts[]> {
    return prisma.posts.findMany();
  },

  async getPostById(id: number): Promise<Posts | null> {
    return prisma.posts.findUnique({
      where: { id },
    });
  },

  async createPost(data: PostData): Promise<Posts> {
    return prisma.posts.create({
      data,
    });
  },

  async updatePost(id: number, data: Partial<PostData>): Promise<Posts> {
    return prisma.posts.update({
      where: { id },
      data,
    });
  },

  async deletePost(id: number): Promise<Posts> {
    return prisma.posts.delete({
      where: { id },
    });
  },
};

export default PostModel;
