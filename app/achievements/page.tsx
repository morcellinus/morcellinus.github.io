export default function AchievementsPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Achievements</h1>

      <div>
        <h2 className="font-semibold">Awards</h2>
        <ul className="mt-3 space-y-3">
          <li className="border rounded-xl p-4">
            <div className="font-medium">2nd Place, Daishin Securities AI ESG Competition (2022)</div>
            <div className="text-sm text-neutral-600">
              Built a multilingual BERT fine-tuning pipeline for automatic classification of ESG
              press releases.
            </div>
          </li>
          <li className="border rounded-xl p-4">
            <div className="font-medium">1st Place, NH Investment & Securities Big Data Competition (2021)</div>
            <div className="text-sm text-neutral-600">
              Designed and implemented an algorithm to map trending topics to relevant stocks.
            </div>
          </li>
          <li className="border rounded-xl p-4">
            <div className="font-medium">1st Place, KOPIS Big Data Competition (2021)</div>
            <div className="text-sm text-neutral-600">
              Conducted spatial statistical analysis of performance districts to support niche
              genre revitalization.
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Invited Talks</h2>
        <p className="mt-2 text-sm text-neutral-600">No invited talks listed yet.</p>
      </div>
    </section>
  );
}
