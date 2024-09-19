import { Router } from "express";
import CommentController from "../controllers/comment.controller";

const router: Router = Router();

router.get("/comments", CommentController.getComments);
router.get("/comments/:id", CommentController.getComment);
router.post("/comments", CommentController.createComment);
router.put("/comments/:id", CommentController.updateComment);
router.delete("/comments/:id", CommentController.deleteComment);

export default router;
