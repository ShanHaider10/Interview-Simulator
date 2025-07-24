import express from "express";
// import { getInterviewQuestions } from "../controllers/interviewController";
import {getInterviewQuestions} from "../controllers/interviewController"
const router = express.Router();

router.get("/:role", getInterviewQuestions);

export default router;
