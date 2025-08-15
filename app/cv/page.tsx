export default function CVPage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Curriculum Vitae</h1>
      <p className="mt-2">You can view or download my CV below:</p>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download CV (PDF)
      </a>
    </section>
  );
}
