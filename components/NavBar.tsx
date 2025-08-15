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
            className={
              "transition hover:opacity-80 " +
              (active ? "font-semibold underline" : "text-neutral-600")
            }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}