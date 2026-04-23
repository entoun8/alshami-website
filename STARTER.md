# SPEC.md — Alshami Website

## Before Starting

Before writing any code, read the following files carefully and follow them throughout the entire project:

- `ALSHAMI_INFORMATION.md` — brand and product information for Alshami Coffee and Al-Attar Herbs
- `ALSHAMI_DESIGN_SYSTEM.md` — Alshami colour system, typography, components, and design guidelines
- `SKILL.md` — frontend design guidelines for creating distinctive, production-grade interfaces
- `REQUIREMENTS.md` — technical stack, code quality rules, styling rules, and SEO requirements

---

## Project Overview

Build an informational website for **Alshami**, an Australian business that imports and distributes two authentic Syrian brands — **Alshami Coffee** and **Al-Attar Herbs** — from Damascus, Syria, to customers across Australia.

The website is **not an e-commerce store**. It is a purely informational website that introduces the business and showcases both brands and their products.

---

## Media

All media files are located in the `media/` folder. Use them throughout the website as follows:

- **Banner video** — use the video file inside `media/` as the background of the hero banner on the Home page.
- **Images** — use the images inside `media/` across the relevant pages and sections (brand sections, product cards, About page, etc.).

Always reference media files using their relative path from the `media/` folder (e.g., `media/filename.mp4`, `media/filename.jpg`).

---

## Pages

The website consists of 5 pages:

1. **Home** — Introduces the Alshami business and highlights both brands.
2. **About Us** — Tells the story of the business and why it brings Syrian products to Australia.
3. **Alshami Coffee** — Dedicated page for the Alshami Coffee brand, its history, and its full product range.
4. **Al-Attar Herbs** — Dedicated page for the Al-Attar brand, its history, and its full product range.
5. **Contact** — Business contact information including phone, email, WhatsApp, and social media links.

---

## General Requirements

- The website must be fully responsive across mobile, tablet, and desktop.
- All content must be in English only.
- The design must follow the Alshami design system defined in `ALSHAMI_DESIGN_SYSTEM.md`.
- The frontend must follow the design guidelines defined in `SKILL.md`.
- All brand and product information must come from `ALSHAMI_INFORMATION.md`.
- Use **Framer Motion** for animations wherever possible — page transitions, elements entering on scroll, hero text reveals, card animations, and any other motion effects throughout the website.
