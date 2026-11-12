import { ProfileCard } from "@/components/ProfileCard";

export default function AboutPage() {
  return (
    <section className="intro-grid" aria-labelledby="about">
      <div className="prose-column space-y-4">
        <h1 id="about" className="section-title">About Me</h1>
        <p>
          I’m <b>Jinmo Lee</b>, a <b>Founding Research Scientist at NUMS AI</b>, where I have
          been building Causilo, a frontier tabular foundation model, since August 2026. I’m also a PhD
          student in Computer Science and Engineering at <b>Seoul National University</b> (since
          March 2026), advised by <b>Prof. Jaemin Yoo</b>.
        </p>
        <p>
          My research seeks to understand the fundamental principles of modeling relations and
          interactions in structured data, with a focus on tabular foundation models and
          heterogeneous graphs. I study how these structures shape representation learning and
          generalization to develop principled, computationally efficient methods for reliable,
          robust, and broadly applicable intelligent systems.
        </p>
        <p>
          Before joining SNU, I pursued doctoral studies at KAIST from September 2025 to
          February 2026, also advised by Prof. Jaemin Yoo. I earned my M.S. in Applied Artificial
          Intelligence (2024), advised by Prof. Eunil Park, and B.S. in Statistics (2023,
          <i> Summa Cum Laude</i>) at Sungkyunkwan University.
        </p>
        <p>
          Previously, I worked as a data scientist at NH Investment & Securities (August 2023
          to August 2025) and KB Kookmin Card (October 2022 to July 2023), applying data analysis
          and machine learning to decision making.
        </p>
      </div>
      <ProfileCard />
    </section>
  );
}
