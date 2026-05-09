import axios from "axios";

export const generateAIResponse = async (prompt, mode) => {
  const res = await axios.post("/api/ai/generate", { prompt, mode });
  return res.data;
};