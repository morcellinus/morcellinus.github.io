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
    <nav className="flex gap-5 text-sm">
      {tabs.map((t) => {
        const active = current === normalize(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`px-2 py-1 rounded transition duration-200 ${
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