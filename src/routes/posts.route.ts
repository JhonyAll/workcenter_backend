import { Router } from "express";
import PostController from "../controllers/posts.controller";

const router: Router = Router();

router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getPost);
router.post("/posts", PostController.createPost);
router.put("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

export default router;
