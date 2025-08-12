export function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-center text-sm text-neutral-500">
        <div>© {new Date().getFullYear()} Jinmo Lee · KAIST EE</div>
        <div className="mt-1">
          Advisor: Prof. Jaemin Yoo (<a className="underline" href="https://dai.kaist.ac.kr/" target="_blank">dai.kaist.ac.kr</a>)
        </div>
      </div>
    </footer>
  );
}