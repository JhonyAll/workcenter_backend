import { Router } from "express";
import ReviewController from "../controllers/review.controller";

const router: Router = Router();

router.get("/reviews", ReviewController.getReviews);
router.get("/reviews/:id", ReviewController.getReview);
router.post("/reviews", ReviewController.createReview);
router.put("/reviews/:id", ReviewController.updateReview);
router.delete("/reviews/:id", ReviewController.deleteReview);

export default router;
