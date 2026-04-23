"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/alshami-coffee", label: "Alshami Coffee" },
  { href: "/al-attar-herbs", label: "Al-Attar Herbs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ boxShadow: "var(--shadow-nav)" }}
      >
        <div className="flex items-center justify-between px-[1.6rem] md:px-[2.4rem] lg:px-[4.0rem] h-[6.4rem] sm:h-[7.2rem] md:h-[8.3rem] lg:h-[9.9rem] max-w-[144rem] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/media/images/logo.svg"
              alt="Alshami"
              width={120}
              height={40}
              className="h-[3.2rem] md:h-[4rem] w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[2.4rem] lg:gap-[3.2rem]">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-[1.4rem] font-medium tracking-tight transition-colors ${
                    active
                      ? "text-caramel"
                      : "text-text-black hover:text-alshami-brown"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[0.5rem] p-[0.8rem] -mr-[0.8rem]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[2.4rem] h-[0.2rem] bg-text-black rounded-full" />
            <span className="block w-[2.4rem] h-[0.2rem] bg-text-black rounded-full" />
            <span className="block w-[2.4rem] h-[0.2rem] bg-text-black rounded-full" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[28rem] bg-white flex flex-col px-[2.4rem] pt-[2.4rem] pb-[4rem]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
            >
              <div className="flex items-center justify-between mb-[3.2rem]">
                <span className="text-[1.6rem] font-semibold text-text-black">Menu</span>
                <button
                  className="text-[2.8rem] leading-none text-text-black-soft hover:text-text-black transition-colors"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col">
                {links.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`text-[1.7rem] font-medium py-[1.4rem] border-b border-border transition-colors ${
                        active
                          ? "text-caramel"
                          : "text-text-black hover:text-alshami-brown"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
