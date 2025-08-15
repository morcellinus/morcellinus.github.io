"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/achievements", label: "Achievements" },
  { href: "/cv", label: "CV" },
];

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-5 text-sm">
      {tabs.map((t) => {
        const active = pathname === t.href;
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