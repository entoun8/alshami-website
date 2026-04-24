import Link from "next/link";
import Container from "@/components/container";
import { navLinks } from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer className="bg-dark-espresso text-text-white mt-auto">
      <Container className="py-[4.8rem] md:py-[6.4rem]">
        <div className="flex flex-col md:flex-row md:justify-between gap-[3.2rem] md:gap-[6.4rem]">
          {/* Brand info */}
          <div className="shrink-0">
            <p className="text-[2.2rem] font-bold tracking-tight">Alshami</p>
            <p className="text-[1.4rem] text-text-white-soft mt-[0.8rem] max-w-[28rem] leading-relaxed">
              Authentic Syrian brands brought to Australia — Alshami Coffee and Al-Attar Herbs.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col sm:flex-row flex-wrap gap-[1.2rem] sm:gap-x-[4rem] sm:gap-y-[1.2rem]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[1.4rem] text-text-white-soft hover:text-text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border-white-subtle mt-[3.2rem] pt-[2.4rem]">
          <p className="text-[1.3rem] text-text-white-soft">
            © {new Date().getFullYear()} Alshami. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
