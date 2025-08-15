export default function ResearchPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Research</h1>
      <div>
        <h2 className="font-semibold">Interests</h2>
        <ul className="list-disc ml-6 mt-2 text-neutral-700 space-y-1">
          <li>Graph Neural Networks (GNNs), Heterogeneous Graphs</li>
          <li>LLM × Graphs for Model Training, Fine-tuning, Post-training, and Inference</li>
          <li>Graph-based Multimodal LLM</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Publications</h2>
        <ul className="mt-3 space-y-3">
          {/* [J2] 2025 */}
          <li className="border rounded-xl p-4">
            <div className="font-medium">[J2] We know who wins: graph-oriented approaches of passing networks for predictive football match outcomes</div>
            <div className="text-sm text-neutral-600">J Lee, E Park, AP del Pobil. <i>Journal of Big Data</i> 12(1), 147 (2025).</div>
          </li>

          {/* [J1] 2023 */}
          <li className="border rounded-xl p-4">
            <div className="font-medium">[J1] D-HRSP: Dataset of helpful reviews for service providers</div>
            <div className="text-sm text-neutral-600">J Lee, E Park. <i>Telematics and Informatics</i> 82, 102001 (2023).</div>
          </li>
        </ul>
      </div>
    </section>
  );
}