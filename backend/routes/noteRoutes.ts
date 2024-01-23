import { createNote } from "../controllers/noteController";
import { Router } from "express";

const router = Router();

router.post("/create", createNote);

export default router;