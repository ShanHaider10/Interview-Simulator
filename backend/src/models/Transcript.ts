import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  question: String,
  answer: String,
  sentiment: String,
});

const transcriptSchema = new mongoose.Schema({
  answers: [answerSchema], // Array of Q/A/sentiment
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TranscriptModel = mongoose.model("Transcript", transcriptSchema);
export default TranscriptModel;
