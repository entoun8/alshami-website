import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/alshami-coffee", label: "Alshami Coffee" },
  { href: "/al-attar-herbs", label: "Al-Attar Herbs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-espresso text-text-white mt-auto">
      <div className="max-w-[144rem] mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4.0rem] py-[4.8rem] md:py-[6.4rem]">
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
            {links.map(({ href, label }) => (
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

        <div className="border-t border-white/10 mt-[3.2rem] pt-[2.4rem]">
          <p className="text-[1.3rem] text-text-white-soft">
            © {new Date().getFullYear()} Alshami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
