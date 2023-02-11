import express from "express";
import { getBills, postBill } from "../controllers/billController.js";

const router = express.Router();

router.get("/", getBills);
router.post("/", postBill);

export default router;
