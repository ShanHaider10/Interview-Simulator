import { Request, Response } from "express";




export const getInterviewQuestions = (req: Request, res: Response) => {
  const role = req.params.role;

  const questionsMap: Record<string, string[]> = {
    sales: [
      "How would you handle a tough client?",
      "What makes you a good salesperson?",
      "Tell me about a successful pitch you’ve done."
    ],
    support: [
      "How do you handle a frustrated customer?",
      "Describe a time you resolved a technical issue.",
      "What tools do you use for support?"
    ]
  };

  if ( !questionsMap[role]) {
    return res.status(400).json({ error: "Invalid role provided" });
  }

  return res.status(200).json(questionsMap[role]);
};
