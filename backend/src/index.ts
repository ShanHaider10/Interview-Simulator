import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import interviewRoutes from "./routes/interviewRoutes";
import transcriptRoutes from "./routes/transcriptRoutes";
import sentimentRoutes from "./routes/sentimentRoutes";
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/interview", interviewRoutes);
app.use("/api/transcripts", transcriptRoutes);
app.use("/api/sentiment", sentimentRoutes);
app.use("/api/transcripts", transcriptRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/interview").then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(4000, () => console.log("🚀 Server running at http://localhost:4000"));
});
