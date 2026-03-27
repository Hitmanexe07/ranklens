# RankLens — SEO Affiliate Site

A clean, modern, conversion-focused affiliate website for promoting SEO SaaS tools (Semrush). Built with React + Vite + Tailwind CSS.

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Brand intro, featured guides, trust section |
| Comparison | `/semrush-vs-ahrefs` | Semrush vs Ahrefs — paid traffic landing page |
| Review | `/semrush-review` | Semrush review for beginners |
| Best Picks | `/best-seo-tool-small-business` | Best SEO tool for small business |

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

### 3. Build for production

```bash
npm run build
npm run preview  # preview the build locally
```

## Customization Checklist

### Replace affiliate links
Search for `#affiliate-link` across the codebase and replace with your real affiliate URLs:

- `src/components/Header.jsx` — top nav CTA
- `src/pages/Comparison.jsx` — `SEMRUSH_AFFILIATE` and `AHREFS_AFFILIATE`
- `src/pages/Review.jsx` — `AFFILIATE_HREF`
- `src/pages/BestFor.jsx` — `SEMRUSH_AFFILIATE`, `AHREFS_AFFILIATE`, `SERANKING_AFFILIATE`
- `src/pages/Home.jsx` — `AFFILIATE_HREF`

### Update pricing
All prices are approximate as of Q1 2026. Verify current prices at each provider and update in:
- `src/pages/Comparison.jsx` — pricing tables and comparison rows
- `src/pages/Review.jsx` — pricing plans section
- `src/pages/BestFor.jsx` — topTools array and comparison table

### Add your brand/logo
Replace "RankLens" in:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `index.html` (title and meta description)

### Add legal pages
The footer links to `#` placeholder for:
- Privacy Policy
- Terms of Use
- Affiliate Disclosure
- Editorial Guidelines
- Contact

Create these as separate pages and update the `href` values in `src/components/Footer.jsx`.

### Add Google Analytics / tracking
Add your GA4 script tag to `index.html` before `</head>`.

### Add testimonials
Each page has placeholder spots for testimonials. Replace the placeholder comments with real quotes (with permission) or verified user reviews.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Font**: Inter (Google Fonts)
- **Icons**: Inline SVG (no icon library dependency)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Sticky header with mobile menu
│   ├── Footer.jsx       # Multi-column footer with disclosure
│   └── FAQAccordion.jsx # Reusable accordion component
├── pages/
│   ├── Home.jsx         # Homepage
│   ├── Comparison.jsx   # Semrush vs Ahrefs comparison
│   ├── Review.jsx       # Semrush review
│   └── BestFor.jsx      # Best SEO tool for small business
├── App.jsx              # Routes + layout shell
├── main.jsx             # React entry point
└── index.css            # Tailwind directives + base styles
```

## SEO Notes

Each page has:
- Semantic H1/H2/H3 hierarchy
- Descriptive meta description in `index.html` (update per-page using a meta tag library like `react-helmet` for production)
- Breadcrumb navigation
- Affiliate disclosure on every page
- `rel="noopener noreferrer sponsored"` on all outbound affiliate links

For a production deployment, add:
- Per-page `<title>` and `<meta name="description">` tags (use `react-helmet-async`)
- Canonical URLs
- Open Graph / Twitter card meta tags
- Sitemap.xml
- robots.txt
