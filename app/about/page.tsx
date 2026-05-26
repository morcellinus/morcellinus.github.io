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
            I’m <b>Jinmo Lee</b>, a PhD student at <b>KAIST</b> (School of Electrical Engineering),
            advised by <b>Prof. Jaemin Yoo</b>.
          </p>
          <p>
            My current interests include graph neural networks, heterogeneous graphs, and
            graph-enhanced LLM systems.
          </p>
          <div className="mt-3">
            <div className="text-sm text-neutral-700">
              Email:{" "}
              <a className="underline" href="mailto:jml2529@kaist.ac.kr">
                jml2529@kaist.ac.kr
              </a>
            </div>
            <div className="text-sm text-neutral-700">
              Advisor:{" "}
              <a className="underline" href="https://dai.kaist.ac.kr/" target="_blank" rel="noreferrer">
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
