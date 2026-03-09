# Ascone Landing Page

A responsive, animated one-page landing page for Ascone—a fintech brand—built with Next.js.

## Setup

1. **Prerequisites:** Node.js 18.x or 20.x (LTS recommended).

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

To submit via GitHub: add your repo as remote (`git remote add origin <repo-url>`) and push (`git push -u origin master` or your default branch).

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Linting:** ESLint (Next.js config)

## Project structure

- `src/app/` — App Router layout and page
- `src/components/` — Reusable and section components (Header, Hero, Features, FAQ, Footer, etc.)
- `src/lib/` — Content and constants (nav, FAQ, footer links)
- Design tokens (Ascone colors and typography) are in `tailwind.config.ts` and `src/app/globals.css`

## Assumptions & notes

- **Brand:** Typography and colors follow the Ascone mini brand guide (Helvetica, primary green `#1C3F3A`, cream `#EBE8D8`, light grey `#E0EAE8`, dark navy `#0A0C29`). Helvetica is used with a system fallback stack (`Helvetica, Arial, sans-serif`).
- **Assets:** Hero visuals, partner logos, and icons are placeholders (CSS/SVG shapes or text). Replace with real images in `public/` and update components as needed.
- **Copy:** Section copy and FAQ answers are representative; replace with final content.
- **Links:** Navigation and footer links use `#`; wire to real routes or anchors when available.
- **No backend or API** — front-end only.

## License

Private / project use.
