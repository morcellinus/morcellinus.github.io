export default function CVPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Curriculum Vitae</h1>
      <p>My academic and professional background, publications, and activities.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href="/CV-jinmolee.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#003478] px-5 py-3 font-semibold text-white hover:bg-blue-900">View CV (PDF)</a>
        <a href="/CV-jinmolee.pdf" download="CV-JinmoLee.pdf" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#003478] px-5 py-3 font-semibold text-[#003478] hover:bg-blue-50">Download PDF</a>
      </div>
      <p className="text-sm text-neutral-500">Last updated: October 2026</p>
    </section>
  );
}
