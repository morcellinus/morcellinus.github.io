import Link from "next/link";
import { ProfileCard } from "@/components/ProfileCard";
import { publications } from "@/lib/profile";

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="intro-grid" aria-labelledby="intro">
        <div className="prose-column space-y-4">
          <h1 id="intro" className="section-title home-title">Hi, I’m Jinmo Lee 😎</h1>
          <p className="text-neutral-800">
            I’m a Founding Research Scientist at NUMS AI (since August 2026), building
            <strong> Causilo</strong>, a frontier tabular foundation model. I’m also a PhD student
            in Computer Science and Engineering at Seoul National University (since March 2026),
            advised by <a className="text-link" href="https://da.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Prof. Jaemin Yoo</a>.
          </p>
          <p className="text-neutral-800">
            My research focuses on relations and interactions in structured data, particularly
            tabular foundation models and heterogeneous graphs. I study how these structures shape
            representation learning and generalization, with the goal of developing principled,
            computationally efficient methods for reliable and robust intelligent systems.
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>B.S. in Statistics, Sungkyunkwan University (<i>Summa Cum Laude</i>, GPA: 4.39/4.50)</li>
            <li>M.S. in Applied Artificial Intelligence, Sungkyunkwan University, advised by Prof. Eunil Park (GPA: 4.28/4.50)</li>
          </ul>
          <p className="text-neutral-800">
            Previously, I worked as a data scientist at NH Investment &amp; Securities (August 2023 to
            August 2025) and KB Kookmin Card (October 2022 to July 2023), applying data analysis and
            machine learning to decision making.
          </p>
          <Link className="contact-link text-sm" href="/about/">More about my background →</Link>
        </div>
        <ProfileCard priority />
      </section>
      <section aria-labelledby="recent-research">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h2 id="recent-research" className="subsection-title">Recent Research</h2>
          <Link className="contact-link text-sm" href="/research/">All publications →</Link>
        </div>
        <ul className="card-grid featured-grid mt-3">
          {publications.slice(0, 3).map((paper) => (
            <li key={paper.id} className="content-card">
              {paper.url ? (
                <a className="text-link font-semibold" href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
              ) : (
                <Link className="text-link font-semibold" href={`/research/#${paper.id.toLowerCase()}`}>{paper.title}</Link>
              )}
              <p className="mt-1 text-sm text-neutral-600">{paper.venue}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
