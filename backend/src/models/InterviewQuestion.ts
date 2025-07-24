import mongoose from 'mongoose';

const InterviewQuestionSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
});

const InterviewQuestion = mongoose.model('InterviewQuestion', InterviewQuestionSchema);
export default InterviewQuestion;
