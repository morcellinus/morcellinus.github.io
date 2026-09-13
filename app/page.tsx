import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Hi, I’m Jinmo Lee 😎</h1>
        <p className="mt-3 max-w-3xl text-neutral-800">
          I’m a Founding Research Scientist at NUMS AI, where I have been building a frontier
          tabular foundation model since August 2026. I’m also a PhD student in Computer Science
          and Engineering at Seoul National University (since March 2026), advised by Prof. Jaemin Yoo.
        </p>
        <ul className="mt-4 space-y-2 pl-0 text-sm text-neutral-700">
          <li>
            B.S. in Statistics, Sungkyunkwan University (<i>Summa Cum Laude</i>, GPA: 4.39/4.50)
          </li>
          <li>
            M.S. in Applied Artificial Intelligence, Sungkyunkwan University, advised by Prof. Eunil Park (GPA: 4.28/4.50)
          </li>
        </ul>
        <p className="mt-4 max-w-3xl text-neutral-800">
          Previously, I worked as a data scientist at NH Investment & Securities (August 2023 to
          August 2025) and KB Kookmin Card (October 2022 to July 2023), applying data analysis and
          machine learning to decision making.
        </p>
        <p className="mt-2 max-w-3xl text-neutral-800">
          My research focuses on relations and interactions in structured data, particularly
          tabular foundation models and heterogeneous graphs. I study how these structures shape
          representation learning and generalization, with the goal of developing principled,
          computationally efficient methods for reliable and robust intelligent systems.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="Jinmo Lee"
            width={210}
            height={210}
            className="rounded-full border"
          />
        </div>
        <div className="space-y-4">
          <div className="text-sm text-neutral-700">
            <b>Email:</b>{" "}
            <a className="underline" href="mailto:jinmo.lee@nums.world">
              jinmo.lee@nums.world
            </a>
            {" / "}
            <a className="underline" href="mailto:jinmo.lee@snu.ac.kr">
              jinmo.lee@snu.ac.kr
            </a>
          </div>
          <div className="text-sm text-neutral-700">
            <b>Advisor:</b>{" "}
            <a className="underline" href="https://da.snu.ac.kr/" target="_blank" rel="noreferrer">
              Prof. Jaemin Yoo
            </a>
          </div>
          <div className="text-sm text-neutral-700">
            <b>Links:</b>{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/jinmo-lee-3b5115253/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            {", "}
            <a
              className="underline"
              href="https://scholar.google.com/citations?user=t15sD98AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </div>
          <p className="text-neutral-700">
            For research collaboration or academic inquiries, feel free to contact me by email.
          </p>
        </div>
      </div>
    </section>
  );
}
