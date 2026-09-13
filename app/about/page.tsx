import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">About Me</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="shrink-0">
          <Image
            src="/profile.jpg" // ← put your real photo here
            alt="Jinmo Lee"
            width={160}
            height={160}
            className="rounded-full border"
          />
        </div>
        <div className="space-y-2">
          <p>
            I’m <b>Jinmo Lee</b>, a <b>Founding Research Scientist at NUMS AI</b>, where I have
            been building a frontier tabular foundation model since August 2026. I’m also a PhD
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
          <div className="mt-3">
            <div className="text-sm text-neutral-700">
              Email:{" "}
              <a className="underline" href="mailto:jinmo.lee@nums.world">
                jinmo.lee@nums.world
              </a>
              {" / "}
              <a className="underline" href="mailto:jinmo.lee@snu.ac.kr">
                jinmo.lee@snu.ac.kr
              </a>
            </div>
            <div className="text-sm text-neutral-700">
              Advisor:{" "}
              <a className="underline" href="https://da.snu.ac.kr/" target="_blank" rel="noreferrer">
                Prof. Jaemin Yoo
              </a>
            </div>
            <div className="text-sm text-neutral-700">
              CV: <a className="underline" href="/CV-jinmolee.pdf">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
