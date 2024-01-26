import {Router} from "express" 
import { NoteTagsController } from "../controllers/noteTagController"

const router = Router()

router.post("/create", NoteTagsController.createNoteTag)
router.patch("/update", NoteTagsController.updateNoteTag)
router.delete("/delete/:id", NoteTagsController.delete)
router.get("/find/all", NoteTagsController.getNoteTagsAll)
router.get("/find/note/:id", NoteTagsController.getNoteTagsByNoteId)
router.get("/find/tag/:id", NoteTagsController.getNoteTagsByTagId)

export default router

