import Link from "next/link";
export function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block border rounded-2xl p-5 hover:shadow-md transition">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{desc}</div>
    </Link>
  );
}