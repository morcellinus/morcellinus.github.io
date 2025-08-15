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
          <h3 className="font-semibold">2025</h3>
          {/* [J2] 2025 */}
          <li className="border rounded-xl p-4">
            <a className="font-medium" href = "https://journalofbigdata.springeropen.com/articles/10.1186/s40537-025-01203-9">[J2] We know who wins: graph-oriented approaches of passing networks for predictive football match outcomes</a>
            <div className="text-sm text-neutral-600"><b>J Lee</b>, E Park, AP del Pobil. <i>Journal of Big Data</i> 12(1), 147 (2025).</div>
          </li>

          {/* [J1] 2023 */}
          <h3 className="font-semibold">2023</h3>
          <li className="border rounded-xl p-4">
            <a className="font-medium" href="https://www.sciencedirect.com/science/article/abs/pii/S0736585323000655">[J1] D-HRSP: Dataset of helpful reviews for service providers</a>
            <div className="text-sm text-neutral-600"><b>J Lee</b>, E Park. <i>Telematics and Informatics</i> 82, 102001 (2023).</div>
            
          </li>
        </ul>
      </div>
    </section>
  );
}