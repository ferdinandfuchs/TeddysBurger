# Project File Overview

## Root

- `.gitignore` - Git ignore rules
- `.prettierrc` - Prettier configuration
- `astro.config.mjs` - Astro framework configuration
- `eslint.config.js` - ESLint configuration
- `package.json` - Project dependencies and scripts
- `package-lock.json` - Locked dependency versions
- `tsconfig.json` - TypeScript configuration
- `README.md` - Astro starter documentation
- `CLAUDE.md` - Development protocols and rules
- `TeddysBurger.code-workspace` - VSCode workspace settings

## docs/

- `DevelopmentPlan.md` - Step-by-step implementation plan

## tina/

- `config.ts` - Tina CMS configuration
- `__generated__/` - Auto-generated Tina types and client (gitignored)

## content/

- `posts/` - Content storage for Tina CMS
- `gallery/` - Gallery images collection (5 images)
- `location/` - Location information (main.json)
- `menu/` - Menu items (27 items: 11 burgers, 3 kids menus, 1 fingerfood, 4 sides, 8 drinks)
- `pages/` - Page content (home.json with hero)
- `settings/` - Site settings (index.json)

## public/

- `favicon.svg` - Site favicon
- `uploads/` - Media uploads directory for Tina CMS

## src/styles/

- `global.css` - Global styles with Tailwind and custom theme colors

## src/layouts/

- `BaseLayout.astro` - Main layout with SEO meta tags, global styles, dark theme

## src/components/

- `Header.astro` - Sticky header with logo, navigation links, mobile menu
- `Footer.astro` - Footer with contact info, social links, legal links, copyright
- `Hero.astro` - Full-width hero section with background image, title, subtitle, CTA button
- `Menu.astro` - Menu section with category filtering (Alle/Burger/Kids/Fingerfood/Beilagen/Getränke)
- `MenuItem.astro` - Individual menu item card with name, price, description, image
- `Location.astro` - Location section with address, phone (clickable), opening hours, optional image
- `Gallery.astro` - Image gallery grid with captions and hover overlay
- `Contact.astro` - Contact section with phone, email, address, and social links

## src/pages/

- `index.astro` - Homepage fetching all content from Tina CMS (hero, menu, location, gallery, contact)
- `impressum.astro` - Legal Impressum page with placeholder content (§ 5 TMG compliance)
- `datenschutz.astro` - Privacy policy page with GDPR-compliant placeholder content

## .vscode/

- `extensions.json` - Recommended VSCode extensions
- `launch.json` - VSCode debug configuration
