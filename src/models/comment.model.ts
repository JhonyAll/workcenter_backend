import { PrismaClient, Comments } from "@prisma/client";

const prisma = new PrismaClient();

interface CommentData {
  postId: number;
  userId: number;
  comentario: string;
}

const CommentModel = {
  async getAllComments(): Promise<Comments[]> {
    return prisma.comments.findMany();
  },

  async getCommentById(id: number): Promise<Comments | null> {
    return prisma.comments.findUnique({
      where: { id },
    });
  },

  async createComment(data: CommentData): Promise<Comments> {
    return prisma.comments.create({
      data,
    });
  },

  async updateComment(
    id: number,
    data: Partial<CommentData>
  ): Promise<Comments> {
    return prisma.comments.update({
      where: { id },
      data,
    });
  },

  async deleteComment(id: number): Promise<Comments> {
    return prisma.comments.delete({
      where: { id },
    });
  },
};

export default CommentModel;
