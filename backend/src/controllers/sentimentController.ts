import { Request, Response } from "express";
import { analyzeSentiment } from "../utils/sentimentAnalysis";

export const analyzeAnswerSentiment = (req: Request, res: Response) => {
  const { answer } = req.body;

  if (!answer || typeof answer !== "string") {
    return res.status(400).json({ message: "Answer must be a string." });
  }

  const sentiment = analyzeSentiment(answer);
  res.json({ sentiment });
};
