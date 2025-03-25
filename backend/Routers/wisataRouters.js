import express from "express";
import { addData, getData } from "../Controllers/wisataControllers.js";

const router = express.Router();

router.get("/wisata", getData);
router.post("/wisata", addData);

export default router;
