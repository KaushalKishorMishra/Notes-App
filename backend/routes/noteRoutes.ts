import { NoteControllers } from "../controllers/noteController";
import { Router } from "express";

const router = Router();

router.post("/create", NoteControllers.createNote);
router.put("/update/:id", NoteControllers.updateNote);
router.delete("/delete/:id", NoteControllers.deleteNote);
router.get("/find/allNotes", NoteControllers.getAllNotes);
router.get("/find/:title", NoteControllers.getNoteByName);

export default router;
