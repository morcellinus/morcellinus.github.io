import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";

export function ProfileCard({ priority = false }: { priority?: boolean }) {
  return (
    <aside aria-label="Profile and contact" className="content-card profile-card">
      <Image src="/profile.jpg" alt="Jinmo Lee" width={144} height={144} priority={priority} className="profile-photo" />
      <div className="min-w-0 space-y-3">
        <ContactLinks />
        <p className="text-sm text-neutral-700">For research collaboration or academic inquiries, feel free to contact me by email.</p>
        <Link className="contact-link text-sm font-semibold" href="/cv/">Curriculum Vitae →</Link>
      </div>
    </aside>
  );
}
