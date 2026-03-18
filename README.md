# RemodelAI Houston — Next.js Website

A production-ready, SEO-optimized Next.js website for an AI-powered residential remodeling platform serving Houston, TX.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** DM Serif Display + DM Sans (via Google Fonts)

## Project Structure

```
app/
├── layout.tsx               # Root layout with LocalBusiness JSON-LD schema
├── page.tsx                 # Home page
├── globals.css              # Global styles, CSS variables, component classes
├── sitemap.ts               # Auto-generated XML sitemap
├── robots.ts                # Robots.txt
├── not-found.tsx            # 404 page
├── about/page.tsx           # About Us
├── blog/
│   ├── page.tsx             # Blog index (15 posts listed)
│   ├── kitchen-remodel-cost-houston/
│   ├── permit-requirements-houston/
│   ├── best-neighborhoods-houston-remodel/
│   ├── kitchen-remodel-timeline-houston/
│   ├── how-to-choose-contractor-houston/
│   ├── bathroom-remodel-cost-houston/
│   ├── home-addition-cost-houston/
│   ├── open-concept-remodel-houston/
│   ├── houston-remodel-roi/
│   ├── garage-conversion-guide-houston/
│   ├── exterior-remodel-houston-guide/
│   ├── whole-home-renovation-checklist/
│   ├── houston-remodel-financing/
│   ├── contractor-red-flags-houston/
│   └── houston-home-styles-remodel/
├── contact/page.tsx         # Contact page
├── how-it-works/page.tsx    # How It Works (6-step process)
├── instant-estimate/page.tsx # Lead capture + AI estimate form
├── locations/
│   ├── houston/page.tsx
│   ├── the-heights/page.tsx
│   ├── river-oaks/page.tsx
│   ├── katy/page.tsx
│   ├── sugar-land/page.tsx
│   ├── cypress/page.tsx
│   └── memorial/page.tsx
├── privacy/page.tsx
├── services/
│   ├── page.tsx             # Services hub
│   ├── kitchen-remodeling-houston/page.tsx
│   ├── bathroom-remodeling-houston/page.tsx
│   ├── home-additions-houston/page.tsx
│   ├── garage-conversions-houston/page.tsx
│   ├── exterior-remodeling-houston/page.tsx
│   └── whole-home-renovation-houston/page.tsx
└── terms/page.tsx

components/
├── layout/
│   ├── Header.tsx           # Sticky nav with dropdowns + mobile menu
│   ├── Footer.tsx           # SEO-rich footer with all links
│   ├── BlogPostLayout.tsx   # Shared blog post wrapper with sidebar
│   └── LocationPageTemplate.tsx  # Shared location page template
└── ui/
    └── index.tsx            # EstimateForm, FAQAccordion, CTASection,
                             #   ServiceCard, BlogCard, TrustBar,
                             #   StatsRow, ReviewsSection
```

## SEO Features

### Per-Page SEO
- Unique `<title>` and `<meta description>` on every page
- Canonical URLs
- Houston-focused keywords on all pages
- H1/H2/H3 heading hierarchy
- Internal linking: Blog → Services → Locations → Estimate

### Structured Data
- `HomeAndConstructionBusiness` JSON-LD schema in root layout
- AggregateRating, areaServed, openingHoursSpecification
- geo coordinates for Houston headquarters

### Technical SEO
- XML sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Security headers (X-Content-Type-Options, X-Frame-Options)
- Mobile-first responsive design

### Content SEO
- 6 service pages with 1,000–1,500+ words each
- 7 location pages with unique local content
- 15 blog posts with Houston-specific keyword targeting
- FAQ sections on service and location pages (Schema-ready)

## Key SEO Target Keywords

| Keyword | Page |
|---|---|
| remodeling Houston TX | / and /locations/houston |
| kitchen remodel Houston | /services/kitchen-remodeling-houston |
| bathroom remodel Houston TX | /services/bathroom-remodeling-houston |
| home addition Houston | /services/home-additions-houston |
| garage conversion Houston | /services/garage-conversions-houston |
| kitchen remodel cost Houston | /blog/kitchen-remodel-cost-houston |
| permit requirements Houston | /blog/permit-requirements-houston |
| remodeling Katy TX | /locations/katy |
| remodeling Sugar Land TX | /locations/sugar-land |
| remodeling Cypress TX | /locations/cypress |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npx vercel --prod
```

Or build and deploy to any Node.js hosting:

```bash
npm run build
# Upload .next/ folder and run: npm start
```

## Customization

### Business Information
Update in `app/layout.tsx` (JSON-LD schema):
- Business name, address, phone
- Service area cities
- Social media URLs

### Colors & Branding
Update CSS variables in `app/globals.css`:
- `--color-accent`: Primary green (#22c55e)
- `--color-bg`: Background dark (#0a0f1a)

### Estimate Form
The `EstimateForm` component in `components/ui/index.tsx` is a front-end mock. To make it functional, connect the `onSubmit` handler to your backend API or a form service (Formspree, HubSpot, etc.).

### Blog Content
All 15 blog posts in `/app/blog/*/page.tsx` use the shared `BlogPostLayout` component. Each file exports metadata and a content component. Full detailed articles are provided for the highest-priority posts; remaining posts include structured content scaffolding ready for expansion.

## Performance Notes

- Google Fonts loaded via CSS `@import` in globals.css — consider moving to `next/font` for optimal LCP
- Images use Next.js `<Image>` component where applicable — add real images to `/public/`
- All pages are server components by default (except client-interactive pages marked `'use client'`)
