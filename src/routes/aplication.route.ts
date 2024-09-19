import { Router } from "express";
import ApplicationController from "../controllers/aplication.controller";

const router: Router = Router();

router.get("/applications", ApplicationController.getApplications);
router.get("/applications/:id", ApplicationController.getApplication);
router.post("/applications", ApplicationController.createApplication);
router.put("/applications/:id", ApplicationController.updateApplication);
router.delete("/applications/:id", ApplicationController.deleteApplication);

export default router;
