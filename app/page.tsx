import Image from "next/image";

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
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="Jinmo Lee"
            width={160}
            height={160}
            className="rounded-full border"
          />
        </div>
        <div className="space-y-2">
          <p>
            My current interests include Graph Neural Networks, LLM × Graphs, and agentic reasoning systems.
          </p>
          <div className="mt-3">
            <div className="text-sm text-neutral-700">
              Email: <a className="underline" href="mailto:jinmo@kaist.ac.kr">jinmo@kaist.ac.kr</a>
            </div>
            <div className="text-sm text-neutral-700">
              Advisor: <a className="underline" href="https://dai.kaist.ac.kr/" target="_blank">Prof. Jaemin Yoo (dai.kaist.ac.kr)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}