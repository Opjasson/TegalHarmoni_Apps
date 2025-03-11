import express from "express"
import { addData, getData} from "../Controllers/hotelControllers.js"


const router = express.Router()


router.get("/hotel",getData)
router.post("/hotel", addData);

export default router;