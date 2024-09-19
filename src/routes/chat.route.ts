import { Router } from "express";
import ChatController from "../controllers/chat.controller";

const router: Router = Router();

router.get("/chats", ChatController.getChats);
router.get("/chats/:id", ChatController.getChat);
router.post("/chats", ChatController.createChat);
router.put("/chats/:id", ChatController.updateChat);
router.delete("/chats/:id", ChatController.deleteChat);

export default router;
