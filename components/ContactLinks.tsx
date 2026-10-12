const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jinmo-lee-3b5115253/" },
  { label: "GitHub", href: "https://github.com/morcellinus" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=t15sD98AAAAJ&hl=en" },
  { label: "alphaXiv", href: "https://www.alphaxiv.org/@jinmo-lee" },
];

export function ContactLinks() {
  return (
    <div className="min-w-0 space-y-3 text-sm text-neutral-700">
      <div className="flex flex-col items-start">
        <span className="font-semibold">Email</span>
        <a className="contact-link" href="mailto:jinmo.lee@nums.world">jinmo.lee@nums.world</a>
        <a className="contact-link" href="mailto:jinmo.lee@snu.ac.kr">jinmo.lee@snu.ac.kr</a>
      </div>
      <p>
        <span className="font-semibold">Advisor: </span>
        <a className="text-link" href="https://da.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Prof. Jaemin Yoo</a>
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Research and professional profiles">
        {links.map((link) => (
          <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        ))}
      </div>
    </div>
  );
}
