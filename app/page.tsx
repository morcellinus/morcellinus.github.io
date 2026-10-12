import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { publications } from "@/lib/profile";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi, I’m Jinmo Lee 😎</h1>
        <p className="max-w-3xl text-neutral-800">
          I’m a Founding Research Scientist at NUMS AI (since August 2026), building
          <strong> Causilo</strong>, a frontier tabular foundation model. I’m also a PhD student
          in Computer Science and Engineering at Seoul National University (since March 2026),
          advised by <a className="text-link" href="https://da.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Prof. Jaemin Yoo</a>.
        </p>
        <p className="max-w-3xl text-neutral-800">
          My research focuses on relations and interactions in structured data, particularly
          tabular foundation models and heterogeneous graphs. I study how these structures shape
          representation learning and generalization, with the goal of developing principled,
          computationally efficient methods for reliable and robust intelligent systems.
        </p>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li>B.S. in Statistics, Sungkyunkwan University (<i>Summa Cum Laude</i>, GPA: 4.39/4.50)</li>
          <li>M.S. in Applied Artificial Intelligence, Sungkyunkwan University, advised by Prof. Eunil Park (GPA: 4.28/4.50)</li>
        </ul>
        <p className="max-w-3xl text-neutral-800">
          Previously, I worked as a data scientist at NH Investment &amp; Securities (August 2023 to
          August 2025) and KB Kookmin Card (October 2022 to July 2023), applying data analysis and
          machine learning to decision making.
        </p>
        <Link className="contact-link text-sm" href="/about/">More about my background →</Link>
      </div>
      <div className="flex min-w-0 flex-col items-center gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
        <Image src="/profile.jpg" alt="Jinmo Lee" width={210} height={210} priority className="h-36 w-36 shrink-0 rounded-full border object-cover sm:h-44 sm:w-44" />
        <div className="w-full min-w-0 space-y-3">
          <ContactLinks />
          <p className="text-sm text-neutral-700">For research collaboration or academic inquiries, feel free to contact me by email.</p>
          <Link className="contact-link text-sm font-semibold" href="/cv/">Curriculum Vitae →</Link>
        </div>
      </div>
      <section aria-labelledby="recent-research">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h2 id="recent-research" className="subsection-title">Recent Research</h2>
          <Link className="contact-link text-sm" href="/research/">All publications →</Link>
        </div>
        <ul className="mt-3 space-y-3">
          {publications.slice(0, 3).map((paper) => (
            <li key={paper.id} className="content-card">
              <a className="text-link font-semibold" href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
              <p className="mt-1 text-sm text-neutral-600">{paper.venue}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
