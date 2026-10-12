import { awards, talks, teaching } from "@/lib/profile";

export default function AchievementsPage() {
  return (
    <section className="space-y-8">
      <h1 className="section-title">Achievements</h1>
      <section aria-labelledby="awards">
        <h2 id="awards" className="subsection-title">Honors and Awards</h2>
        <ul className="mt-3 space-y-3">
          {awards.map((award) => (
            <li key={award.title} className="content-card">
              <div className="dated-heading">
                <h3 className="font-semibold">{award.title}</h3>
                <span className="entry-date">{award.date}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{award.detail}</p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="talks">
        <h2 id="talks" className="subsection-title">Talks and Presentations</h2>
        <ul className="mt-3 space-y-3">
          {talks.map((talk) => (
            <li key={talk.event} className="content-card">
              <div className="dated-heading">
                <h3 className="font-semibold">{talk.event}</h3>
                <span className="entry-date">{talk.date}</span>
              </div>
              <p className="mt-2">
                {talk.url ? <a className="text-link" href={talk.url} target="_blank" rel="noopener noreferrer">{talk.title}</a> : talk.title}
              </p>
              <p className="mt-1 text-sm text-neutral-600">{talk.detail}</p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="teaching">
        <h2 id="teaching" className="subsection-title">Teaching Assistantships</h2>
        <ul className="mt-3 space-y-3">
          {teaching.map((course) => (
            <li key={course.code} className="content-card">
              <div className="dated-heading">
                <h3 className="font-semibold">{course.title}</h3>
                <span className="entry-date">{course.date}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{course.institution} · {course.code}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
