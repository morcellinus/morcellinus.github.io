import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Hi, I’m Jinmo Lee 👋</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          PhD student at <b>KAIST (School of Electrical Engineering)</b>, advised by
          <b> Prof. Jaemin Yoo</b>. I work on <b>Graph Neural Networks</b>,
          <b> LLM × Graphs</b>, and <b>agentic reasoning</b>.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Research" desc="Publications, projects, and interests" href="/research" />
        <Card title="Achievements" desc="Awards, talks, internships, services" href="/achievements" />
        <Card title="About" desc="Bio, contact, and CV" href="/about" />
      </div>
    </section>
  );
}