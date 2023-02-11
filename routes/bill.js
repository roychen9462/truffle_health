import express from "express";
import { getBills, postBill } from "../controllers/billController.js";

const router = express.Router();

router.get("/", getBills); // Call getBills when server get a GET request to "/"
router.post("/", postBill); // Call postBill when server get a POST request to "/"

export default router;
