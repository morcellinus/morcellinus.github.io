export default function AchievementsPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Achievements</h1>
      <ul className="space-y-3">
        <li className="border rounded-xl p-4">
          <div className="font-medium">Invited Talk — [Venue], 2025</div>
          <div className="text-sm text-neutral-600">Talk title about LLM × Graphs.</div>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">Best Paper Award — [Conference], 2024</div>
          <div className="text-sm text-neutral-600">Short description.</div>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">Intern — [Lab/Company], 2024</div>
          <div className="text-sm text-neutral-600">Research on agentic systems.</div>
        </li>
      </ul>
    </section>
  );
}