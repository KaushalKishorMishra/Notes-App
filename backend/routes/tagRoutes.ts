import { Router } from "express";
import { createTag } from "../controllers/tagController";

const router = Router();

router.post("/create", createTag);

export default router;