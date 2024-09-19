import { Router } from "express";
import DiplomaController from "../controllers/diploma.controller";

const router: Router = Router();

router.get("/diplomas", DiplomaController.getDiplomas);
router.get("/diplomas/:id", DiplomaController.getDiploma);
router.post("/diplomas", DiplomaController.createDiploma);
router.put("/diplomas/:id", DiplomaController.updateDiploma);
router.delete("/diplomas/:id", DiplomaController.deleteDiploma);

export default router;
