import { PrismaClient, Reviews } from "@prisma/client";

const prisma = new PrismaClient();

interface ReviewData {
  workerId: number;
  userId: number;
  avaliacao: number;
  comentario?: string;
}

const ReviewModel = {
  async getAllReviews(): Promise<Reviews[]> {
    return prisma.reviews.findMany();
  },

  async getReviewById(id: number): Promise<Reviews | null> {
    return prisma.reviews.findUnique({
      where: { id },
    });
  },

  async createReview(data: ReviewData): Promise<Reviews> {
    return prisma.reviews.create({
      data,
    });
  },

  async updateReview(id: number, data: Partial<ReviewData>): Promise<Reviews> {
    return prisma.reviews.update({
      where: { id },
      data,
    });
  },

  async deleteReview(id: number): Promise<Reviews> {
    return prisma.reviews.delete({
      where: { id },
    });
  },
};

export default ReviewModel;
