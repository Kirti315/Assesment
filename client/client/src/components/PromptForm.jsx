import { useState } from "react";

export default function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("explain");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt, mode);
  };

  return (
    <form onSubmit={handleSubmit} className="prompt-form">
      <label className="label">Enter your content</label>

      <textarea
        className="textarea"
        rows="7"
        placeholder="Type a concept, paragraph, or text here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <label className="label">Choose a task</label>

      <select
        className="select"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="explain">Explain a concept</option>
        <option value="mcq">Generate MCQs</option>
        <option value="summarize">Summarize text</option>
        <option value="improve">Improve writing</option>
      </select>

      <button type="submit" className="submit-btn">
        Generate Response
      </button>
    </form>
  );
}