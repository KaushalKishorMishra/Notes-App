import { Router } from "express";
import { TagControllers } from "../controllers/tagController";

const router = Router();

router.post("/create", TagControllers.createTag);
router.patch("/update/:id", TagControllers.updateTag);
router.delete("/delete/:id", TagControllers.deleteTag);
router.get("/find/allTags", TagControllers.getAllTags);
router.get("/find/name/:tagName", TagControllers.getTagByName);
router.get("/find/status/:tagStatus", TagControllers.getTagByTagStatus);

export default router;