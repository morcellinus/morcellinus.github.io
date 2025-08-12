export default function ResearchPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Research</h1>
      <div>
        <h2 className="font-semibold">Interests</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-700 space-y-1">
          <li>Graph Neural Networks (GNNs), Heterogeneous Graphs</li>
          <li>LLM × Graphs, Agentic / Tool-using LLMs</li>
          <li>Multimodal distillation and retrieval-augmented reasoning</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Publications</h2>
        <p className="muted mt-1">(* indicates equal contribution)</p>
        <ul className="mt-3 space-y-3">
          <li className="border rounded-xl p-4">
            <div className="font-medium">[Paper Title Placeholder]</div>
            <div className="text-sm text-neutral-600">Author A, <b>Jinmo Lee</b>, Author C. Conference 2025.</div>
            <div className="mt-1 text-sm"><a className="underline" href="#">paper</a> · <a className="underline" href="#">code</a> · <a className="underline" href="#">slides</a></div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Projects</h2>
        <ul className="mt-2 space-y-3">
          <li className="border rounded-xl p-4">
            <div className="font-medium">Trending Topic → ETF Flow Predictor</div>
            <div className="text-sm text-neutral-600">U.S. ETF flows predicted from social/media trends using LLM + time-series modeling.</div>
          </li>
        </ul>
      </div>
    </section>
  );
}