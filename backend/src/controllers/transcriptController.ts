import { Request, Response } from "express";
import TranscriptModel from "../models/Transcript";

export const saveTranscript = async (req: Request, res: Response) => {
  try {
    const { transcript } = req.body;

    if (!Array.isArray(transcript)) {
      return res.status(400).json({ error: "Transcript must be an array" });
    }

    const saved = await TranscriptModel.create({ answers: transcript });
    return res.status(201).json({ message: "Saved successfully", data: saved });
  } catch (error) {
    console.error("Save Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
