import { Router } from "express";
import { TagControllers } from "../controllers/tagController";

const router = Router();

router.post("/create", TagControllers.createTag);
router.put("/update/:id", TagControllers.updateTag);
router.delete("/delete/:id", TagControllers.deleteTag);
router.get("/find/allTags", TagControllers.getAllTags);
router.get("/find/:tagName", TagControllers.getTagByName);

export default router;