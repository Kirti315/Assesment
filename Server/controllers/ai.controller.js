import { buildPrompt } from "../services/prompt.service.js";
import { callAI } from "../services/ai.service.js";

export const generateContent = async (req, res) => {
  try {
    const { prompt, mode } = req.body;

    if (!prompt || !mode) {
      return res.status(400).json({ error: "Prompt and mode are required." });
    }

    const structuredPrompt = buildPrompt(prompt, mode);
    const result = await callAI(structuredPrompt, mode);

    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate AI response." });
  }
};