import { useState } from "react";
import PromptForm from "./components/PromptForm";
import ResponseCard from "./components/ResponseCard";
import Loader from "./components/Loader";

export default function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (prompt, mode) => {
    setLoading(true);
    setResponse("");

    setTimeout(() => {
      setResponse(`You entered: "${prompt}" in mode: "${mode}"`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="app-shell">
      <div className="app-card">
        <div className="app-header">
          <h1>AI Learning Assistant</h1>
          <p>Explain, summarize, improve writing, and generate MCQs with AI.</p>
        </div>

        <PromptForm onSubmit={handleSubmit} />

        <div className="result-area">
          {loading && <Loader />}
          {response && <ResponseCard response={response} />}
        </div>
      </div>
    </div>
  );
}