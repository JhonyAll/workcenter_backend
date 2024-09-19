import { Router } from "express";
import WorkerController from "../controllers/workers.controller";

const router: Router = Router();

router.get("/workers", WorkerController.getWorkers);
router.get("/workers/:id", WorkerController.getWorker);
router.post("/workers", WorkerController.createWorker);
router.put("/workers/:id", WorkerController.updateWorker);
router.delete("/workers/:id", WorkerController.deleteWorker);

export default router;
