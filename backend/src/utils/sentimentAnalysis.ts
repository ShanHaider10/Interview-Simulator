export const analyzeSentiment = (answer: any): string => {
  if (typeof answer !== "string") return "neutral"; // <-- 🔒 Safety check

  const lower = answer.toLowerCase();
  if (lower.includes("good") || lower.includes("great") || lower.includes("confident")) {
    return "positive";
  } else if (lower.includes("bad") || lower.includes("nervous") || lower.includes("stress")) {
    return "negative";
  }
  return "neutral";
};
