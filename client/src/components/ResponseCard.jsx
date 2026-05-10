export default function ResponseCard({ response }) {
  return (
    <div className="response-card">
      <h3>AI Response</h3>
      <p>{response}</p>
    </div>
  );
}