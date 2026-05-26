export default function ResearchPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Research</h1>
      <div>
        <h2 className="font-semibold">Interests</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-700 space-y-1">
          <li>Graph Neural Networks (GNNs), Heterogeneous Graphs</li>
          <li>LLM × Graphs for training, fine-tuning, post-training, and inference</li>
          <li>Tabular Foundation Models</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Publications</h2>
        <ul className="mt-3 space-y-3">
          <li className="pt-2 text-sm font-semibold text-neutral-500">2026</li>
          <li className="border rounded-xl p-4">
            <div className="font-medium">
              [W1] Bounded Context Management for Tabular Foundation Models on Stream Learning
            </div>
            <div className="text-sm text-neutral-600">
              <b>J Lee</b>, D Choi, M Choi, J Yoo. <i>ICML 2026 Workshop on Foundation Models for
              Structured Data</i> (Spotlight Oral, Top 5% of accepted submissions).
            </div>
          </li>

          <li className="pt-2 text-sm font-semibold text-neutral-500">2025</li>
          <li className="border rounded-xl p-4">
            <a
              className="font-medium"
              href="https://journalofbigdata.springeropen.com/articles/10.1186/s40537-025-01203-9"
              target="_blank"
              rel="noreferrer"
            >
              [J2] We know who wins: Graph-oriented approaches of passing networks for predictive
              football match outcomes
            </a>
            <div className="text-sm text-neutral-600">
              <b>J Lee</b>, E Park, AP del Pobil. <i>Journal of Big Data</i> 12(1), 147.
            </div>
          </li>

          <li className="pt-2 text-sm font-semibold text-neutral-500">2023</li>
          <li className="border rounded-xl p-4">
            <a
              className="font-medium"
              href="https://www.sciencedirect.com/science/article/abs/pii/S0736585323000655"
              target="_blank"
              rel="noreferrer"
            >
              [J1] D-HRSP: Dataset of helpful reviews for service providers
            </a>
            <div className="text-sm text-neutral-600">
              <b>J Lee</b>, E Park. <i>Telematics and Informatics</i> 82, 102001.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
