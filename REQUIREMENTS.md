# REQUIREMENTS.md — Technical Requirements

## Stack

- **Framework:** Next.js (latest stable version)
- **UI Components:** shadcn/ui (latest stable version)
- **Styling:** Tailwind CSS (latest stable version)

---

## Code Quality

- Keep the code **simple and clean**. Always choose the simplest implementation that achieves the goal.
- Avoid writing unnecessary code. Less code is better.
- Write **reusable components**. If something is used more than once, it must be a component.
- Follow Next.js and React best practices throughout.

---

## React & Next.js Rules

- **Never use `useEffect`.**
- **No page should be a client component.** Every page must be a server component.
- If a part of a page requires interactivity, extract it into a separate client component (`"use client"`) and import it into the page.

---

## Styling Rules

- Use **Tailwind CSS** for all styling.
- All colours must be defined in `global.css` and referenced from there. Do not hardcode colour values anywhere in the components.
- Never use inline styles.

---

## Page Consistency

Every page must follow the same consistent pattern:

- Use the same **HTML structure and tags** across all pages.
- Use the same **container** class/component for max-width and horizontal padding.
- Use the same **section spacing** (`my-`, `py-`) values across all pages.
- Use the same **heading hierarchy** (`h1`, `h2`, `h3`) pattern across all pages.
- Navigation and footer must appear on every page.

---

## SEO

- Every page must have a unique and descriptive `metadata` export (title and description) using the Next.js Metadata API.
- Use semantic HTML tags throughout (`header`, `main`, `section`, `article`, `footer`, `nav`).
- All images must have a descriptive `alt` attribute.
- Use Next.js `Image` component for all images.
- Use Next.js `Link` component for all internal navigation.
