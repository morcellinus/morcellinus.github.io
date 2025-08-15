import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Hi, I’m Jinmo Lee 👋<img src="/chelsea.png" alt="Chelsea FC" className="h-6 w-6 object-contain" /></h1>
        <p className="mt-3 text-neutral-1200 max-w-2xl">
          PhD student at KAIST School of Electrical Engineering (25.08-), advised by Prof. Jaemin Yoo.
        </p>
        <ul className="list-none pl-0">
          <li className="flex items-start text-sm">
            <span className="mr-2"></span>
            B.S. in Statistics, Sunkyunkwan University (<i>Summa Cum Laude</i>, GPA : 4.38/4.50)
          </li>
          <li className="flex items-start text-sm mt-1">
            <span className="mr-2"></span>
            M.S. in Applied Artificial Intelligence, advised by Prof. Eunil Park (GPA: 4.30/4.50)
          </li>
        </ul>
        <p>

        </p>
        <p>
          Previously worked at KB Kookmin Card (22.11-23.07) and NH Investments & Securities (23.08-25.07) as a data scientist.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
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
          <div>
            <p className="font-medium">My current research interests include:</p>
            <ul className="list-disc ml-5">
              <li>Graph Neural Networks</li>
              <li>LLM × Graphs</li>
              <li>Graph-based MLLM</li>
            </ul>
          </div>
          <div className="text-sm text-neutral-700">
            <b>Email:</b> <a className="underline" href="mailto:jml2529@kaist.ac.kr">jml2529@kaist.ac.kr</a>
          </div>
          <div className="text-sm text-neutral-700">
            <b>Advisor:</b> <a className="underline" href="https://dai.kaist.ac.kr/" target="_blank">Prof. Jaemin Yoo (dai.kaist.ac.kr)</a>
          </div>
          <div className="text-sm text-neutral-700">
            <b>Links:</b> <a className="underline" href="https://www.linkedin.com/in/jinmo-lee-3b5115253/" target="_blank">LinkedIn</a>,{" "}
            <a className="underline" href="https://scholar.google.com/citations?user=t15sD98AAAAJ&hl=en" target="_blank">GoogleScholar</a>
          </div>
          <p className="text-neutral-700">
            For inquiries about research collaborations or exchanges, feel free to contant me via email.
          </p>
        </div>
      </div>
    </section>
  );
}