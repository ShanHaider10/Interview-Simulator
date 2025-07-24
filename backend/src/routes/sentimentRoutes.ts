import express from "express";
import { analyzeAnswerSentiment } from "../controllers/sentimentController";

const router = express.Router();
router.post("/", analyzeAnswerSentiment);

export default router;
