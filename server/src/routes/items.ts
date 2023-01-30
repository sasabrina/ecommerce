import express from "express";
import { item, itemsList } from "../controllers";

const router = express.Router();

router.get("/", itemsList);
router.get("/:id", item);

export default router;
