"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";

const contactMethods = [
  {
    label: "Phone",
    value: "+61 XXX XXX XXX",
    href: "tel:+61XXXXXXXXX",
    description: "Call us during business hours",
  },
  {
    label: "Email",
    value: "info@alshami.com.au",
    href: "mailto:info@alshami.com.au",
    description: "We reply within one business day",
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/61XXXXXXXXX",
    description: "Quick responses via WhatsApp",
    external: true,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    cta: "Follow on Instagram",
    href: "https://instagram.com/alshamiaustralia",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    cta: "Follow on Facebook",
    href: "https://facebook.com/alshamiaustralia",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function ContactDetails() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-espresso py-[8rem] md:py-[12rem]">
        <Container>
          <motion.div className="max-w-[72rem]" {...fadeUp}>
            <h1 className="text-[4rem] md:text-[5.6rem] lg:text-[6.4rem] font-bold text-text-white leading-tight tracking-tight mb-[2.4rem]">
              Get in Touch
            </h1>
            <p className="text-[1.8rem] md:text-[2rem] text-text-white-soft leading-relaxed">
              We&apos;d love to hear from you — whether you&apos;re a customer, retailer, or distributor interested in Alshami Coffee or Al-Attar Herbs.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact methods */}
      <section className="bg-alshami-cream py-[6.4rem] md:py-[9.6rem]">
        <Container>
          <motion.div
            className="max-w-[80rem] mx-auto flex flex-col gap-[4.8rem]"
            {...fadeUp}
          >
            <div className="flex flex-col gap-[2rem]">
              <h2 className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight">
                Contact Us
              </h2>
              <p className="text-[1.6rem] md:text-[1.8rem] text-text-black-soft leading-relaxed">
                Reach out via any of the channels below. For wholesale and trade enquiries, email us directly and we&apos;ll get back to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.4rem]">
              {contactMethods.map(({ label, value, href, description, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex flex-col gap-[1.2rem] p-[3.2rem] rounded-[1.2rem] bg-warm-ivory shadow-[0_0_0.5px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1"
                >
                  <span className="text-[1.2rem] font-semibold uppercase tracking-widest text-caramel">
                    {label}
                  </span>
                  <span className="text-[1.8rem] font-semibold text-alshami-brown leading-snug">
                    {value}
                  </span>
                  <span className="text-[1.4rem] text-text-black-soft leading-relaxed">
                    {description}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Social connect band */}
      <section className="bg-warm-ivory py-[6.4rem] md:py-[9.6rem]">
        <Container>
          <div className="max-w-[80rem] mx-auto flex flex-col gap-[4.8rem]">
            <motion.h2
              className="text-[3.2rem] md:text-[4rem] font-bold text-alshami-brown leading-tight tracking-tight"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Connect With Us
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.4rem]">
              {socialLinks.map(({ label, cta, href, icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-[2rem] p-[3.2rem] rounded-[1.2rem] bg-alshami-cream shadow-[0_0_0.5px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-caramel">{icon}</span>
                  <div className="flex flex-col gap-[0.8rem]">
                    <span className="text-[1.8rem] font-semibold text-alshami-brown leading-snug">
                      {label}
                    </span>
                    <span className="text-[1.4rem] text-text-black-soft leading-relaxed">
                      {cta}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
