export default function AchievementsPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Achievements</h1>
      <ul className="space-y-3">
        <li className="border rounded-xl p-4">
          <div className="font-medium">2nd Place — [Daishin Investments&Securities AI ESG Competition], 2022</div>
          <div className="text-sm text-neutral-600">Multilingual BERT fine-tuning modeling for automatic classification of ESG press releases.</div>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">1st place — [NH Investments&Securities Big Data Competition], 2021</div>
          <div className="text-sm text-neutral-600">Designing and implementing an algorithm to map trending topics to relevant stocks.</div>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">1st Place - [KOPIS Big Data Competition], 2021</div>
          <div className="text-sm text-neutral-600">Location analysis of performance districts for revitalizing niche genres through spatial statistical analysis.</div>
        </li>
      </ul>
    </section>
  );
}