import express from "express";
import { saveTranscript } from "../controllers/transcriptController";

const router = express.Router();
router.post("/", saveTranscript);

export default router;
