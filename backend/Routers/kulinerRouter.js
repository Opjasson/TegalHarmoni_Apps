import express from "express";
import { addData, getData } from "../Controllers/kulinerController.js";

const router = express.Router();

router.get("/kuliner", getData);
router.post("/kuliner", addData);

export default router;
