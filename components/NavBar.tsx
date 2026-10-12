"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/achievements", label: "Achievements" },
  { href: "/cv", label: "CV" },
];

function normalize(path?: string) {
  if (!path) return "/";
  // remove all trailing slashes except root
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function NavBar() {
  const pathname = usePathname();
  const current = normalize(pathname || "/");

  return (
    <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center justify-between gap-1 text-[13px] sm:w-auto sm:justify-start sm:gap-2 sm:text-sm">
      {tabs.map((t) => {
        const active = current === normalize(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded px-1.5 font-semibold sm:px-3 ${
              active ? "font-semibold underline text-white" : "text-blue-100"
            } hover:text-white hover:underline`}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
