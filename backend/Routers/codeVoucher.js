import express from "express";
import { createVoucher } from "../Controllers/codeVoucher.js";

const route = express.Router();

route.post("/voucher", createVoucher);

export default route;
