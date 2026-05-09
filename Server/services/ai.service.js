import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

console.log("Loaded API Key:", process.env.AI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export const callAI = async (prompt, mode) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return response.output_text;
};