import { Fragment } from "react";
import { publications } from "@/lib/profile";

const publicationGroups = [
  { id: "technical-report", label: "Technical Report", prefixes: /^T/ },
  { id: "conference", label: "Conference", prefixes: /^[CW]/ },
  { id: "journal", label: "Journal", prefixes: /^J/ },
  { id: "preprint", label: "Preprint", prefixes: /^P/ },
];

function PublicationVenue({ id, venue }: { id: string; venue: string }) {
  const highlight = "font-semibold text-[#003478]";
  if (/^[CW]/.test(id)) return <strong className={highlight}>{venue}</strong>;

  const journalName = id.startsWith("J") ? venue.match(/^(.+?)\s+\d+(?=[(,])/)?.[1] : undefined;
  const details = journalName ? venue.slice(journalName.length) : venue;

  return (
    <>
      {journalName && <strong className={highlight}>{journalName}</strong>}
      {details.split(/(\b(?:19|20)\d{2}\b)/).map((part, index) =>
        index % 2 === 1 ? <strong key={index} className={highlight}>{part}</strong> : part,
      )}
    </>
  );
}

export default function ResearchPage() {
  return (
    <section className="page-stack">
      <h1 className="section-title">Research</h1>
      <section aria-labelledby="interests">
        <h2 id="interests" className="subsection-title">Interests</h2>
        <p className="mt-2 text-neutral-700">
          I study tabular foundation models and their applications to diverse tasks, as well as representation learning for heterogeneous graphs.
        </p>
      </section>
      <section aria-labelledby="publications">
        <h2 id="publications" className="subsection-title">Publications</h2>
        <div className="mt-4 space-y-6">
          {publicationGroups.map(({ id, label, prefixes }) => (
            <section key={id} aria-labelledby={id}>
              <h3 id={id} className="mb-3 font-bold text-neutral-500">{label}</h3>
              <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                {publications.filter((paper) => prefixes.test(paper.id)).map((paper) => (
                  <li key={paper.id} id={paper.id.toLowerCase()} className="content-card">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="shrink-0 pt-0.5 text-sm font-semibold text-neutral-500">[{paper.id}]</span>
                      <div className="min-w-0 space-y-1.5">
                        {paper.url ? (
                          <a className="text-link font-semibold leading-snug" href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a>
                        ) : (
                          <span className="font-semibold leading-snug">{paper.title}</span>
                        )}
                        <p className="text-sm text-neutral-700">
                          {paper.authors.map((author, i) => (
                            <Fragment key={author}>
                              {i > 0 && ", "}
                              {author === "Jinmo Lee" ? <strong>{author}</strong> : author}
                            </Fragment>
                          ))}.
                        </p>
                        <p className="text-sm text-neutral-600"><PublicationVenue id={paper.id} venue={paper.venue} /></p>
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
