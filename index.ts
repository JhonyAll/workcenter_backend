import express, { Application } from "express";
import userRoutes from "./src/routes/user.route";
import workerRoutes from "./src/routes/workers.routes";
import workerPhotoRoutes from "./src/routes/worker_photo.route";
import diplomaRoutes from "./src/routes/diploma.route";
import postRoutes from "./src/routes/posts.route";
import applicationRoutes from "./src/routes/aplication.route";
import commentRoutes from "./src/routes/comment.route";
import reviewRoutes from "./src/routes/review.route";
import chatRoutes from "./src/routes/chat.route";

const app: Application = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/worker-photos", workerPhotoRoutes);
app.use("/api/diplomas", diplomaRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
