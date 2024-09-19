import { Router } from "express";
import WorkerPhotoController from "../controllers/worker_photo.controller";

const router: Router = Router();

router.get("/worker-photos", WorkerPhotoController.getWorkerPhotos);
router.get("/worker-photos/:id", WorkerPhotoController.getWorkerPhoto);
router.post("/worker-photos", WorkerPhotoController.createWorkerPhoto);
router.put("/worker-photos/:id", WorkerPhotoController.updateWorkerPhoto);
router.delete("/worker-photos/:id", WorkerPhotoController.deleteWorkerPhoto);

export default router;
