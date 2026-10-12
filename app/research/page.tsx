import { Fragment } from "react";
import { publications } from "@/lib/profile";

export default function ResearchPage() {
  return (
    <section className="space-y-8">
      <h1 className="section-title">Research</h1>
      <section aria-labelledby="interests">
        <h2 id="interests" className="subsection-title">Interests</h2>
        <ul className="ml-5 mt-2 list-disc space-y-1 text-neutral-700">
          <li>Tabular Foundation Models</li>
          <li>Heterogeneous Graphs and Relational Learning</li>
          <li>Representation Learning and Generalization in Structured Data</li>
        </ul>
      </section>
      <section aria-labelledby="publications">
        <h2 id="publications" className="subsection-title">Publications</h2>
        <div className="mt-4 space-y-6">
          {[2026, 2025, 2023].map((year) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <h3 id={`year-${year}`} className="mb-3 font-bold text-neutral-500">{year}</h3>
              <ul className="space-y-3">
                {publications.filter((paper) => paper.year === year).map((paper) => (
                  <li key={paper.id} className="content-card">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="shrink-0 pt-0.5 text-sm font-semibold text-neutral-500">[{paper.id}]</span>
                      <div className="min-w-0 space-y-1.5">
                        <a className="text-link font-semibold leading-snug" href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
                        <p className="text-sm text-neutral-700">
                          {paper.authors.map((author, i) => (
                            <Fragment key={author}>
                              {i > 0 && ", "}
                              {author === "Jinmo Lee" ? <strong>{author}</strong> : author}
                            </Fragment>
                          ))}.
                        </p>
                        <p className="text-sm text-neutral-600">{paper.venue}</p>
                        {paper.note && <p className="text-sm font-medium text-[#003478]">{paper.note}</p>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}
