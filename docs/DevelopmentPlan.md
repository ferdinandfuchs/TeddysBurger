# Teddy's Burger - Development Plan

## Project Overview

- **Name**: Teddy's Burger
- **Tech Stack**: Astro + Tina CMS + Tailwind CSS
- **Language**: German
- **Design**: Dark theme (black background, white text, burnt orange accents)
- **Features**: Single location, Menu (Burgers/Sides/Drinks), Contact info display

---

## Phase 1: Project Foundation

### Step 1.1: Initialize Astro Project

**Status**: ✅ Completed

**Tasks**:

- Create Astro project with TypeScript
- Verify project structure

**Test**:

```bash
npm run dev
# Visit http://localhost:4321 - should see Astro welcome page
```

---

### Step 1.2: Install and Configure Tina CMS

**Status**: ✅ Completed

**Tasks**:

1. Install Tina CMS packages
2. Update package.json scripts for Tina integration
3. Create `tina/config.ts` with basic configuration
4. Create initial content directory structure

**Files to create/modify**:

- `package.json` - Update scripts
- `tina/config.ts` - Tina configuration
- `content/` - Content directory

**Test**:

```bash
npm run dev
# Visit http://localhost:4321/admin - should see Tina CMS admin panel
# Verify no errors in terminal
```

---

### Step 1.3: Set Up Tailwind CSS with Dark Theme

**Status**: ✅ Completed

**Tasks**:

1. Install Tailwind CSS via Astro integration
2. Configure custom colors (black, white, burnt orange)
3. Add custom fonts configuration
4. Create base styles

**Files to create/modify**:

- `tailwind.config.mjs` - Custom theme configuration
- `src/styles/global.css` - Base styles and font imports

**Color Palette**:

```
Background: #000000, #111111
Text: #ffffff
Accent: #ab3f1b (burnt orange)
```

**Test**:

```bash
npm run dev
# Create a test element with Tailwind classes
# Verify dark background and custom colors work
```

---

### Step 1.4: Configure Google Fonts

**Status**: ✅ Completed

**Tasks**:

1. Add Oswald font (headings)
2. Add Lato font (body text)
3. Configure font families in Tailwind

**Test**:

```bash
npm run dev
# Verify fonts load correctly in browser dev tools
# Check Network tab for font files
```

---

### Step 1.5: Set Up Code Quality Tools

**Status**: ✅ Completed (simplified - no Husky)

**Tasks**:

1. Install Prettier and ESLint
2. Configure for Astro/TypeScript
3. Set up Husky for pre-commit hooks
4. Add lint-staged configuration

**Files to create**:

- `.prettierrc` - Prettier config
- `.eslintrc.cjs` - ESLint config
- `.husky/pre-commit` - Pre-commit hook

**Test**:

```bash
# Make a commit with intentional formatting issues
# Verify pre-commit hook catches and fixes them
npm run lint
npm run format
```

---

## Phase 2: Content Schema Definition

### Step 2.1: Create Site Settings Schema

**Status**: ✅ Completed

**Tasks**:

1. Define site settings collection in Tina
2. Fields: restaurant name, logo, tagline, contact info, social links, opening hours

**Schema fields**:

```typescript
{
  name: string,
  logo: image,
  tagline: string,
  phone: string,
  email: string,
  address: string,
  openingHours: object[],
  socialLinks: {
    instagram: string,
    facebook: string
  }
}
```

**Test**:

```bash
npm run dev
# Go to /admin
# Verify Site Settings appears in sidebar
# Can edit and save all fields
```

---

### Step 2.2: Create Menu Items Schema

**Status**: ✅ Completed

**Tasks**:

1. Define menu items collection
2. Fields: name, description, price, image, category, available

**Schema fields**:

```typescript
{
  name: string,
  description: string,
  price: number,
  image: image,
  category: enum['burgers', 'sides', 'drinks'],
  available: boolean
}
```

**Test**:

```bash
npm run dev
# Go to /admin
# Create test menu items in each category
# Verify items save correctly as markdown files
```

---

### Step 2.3: Create Page Content Schema

**Status**: ✅ Completed

**Tasks**:

1. Define page content for Hero and About sections
2. Fields: hero title, hero subtitle, hero image, about text

**Test**:

```bash
npm run dev
# Go to /admin
# Edit page content
# Verify changes save correctly
```

---

### Step 2.4: Create Location Schema

**Status**: ✅ Completed

**Tasks**:

1. Define location details
2. Fields: name, address, phone, opening hours, image

**Test**:

```bash
npm run dev
# Go to /admin
# Edit location details
# Verify all fields work correctly
```

---

### Step 2.5: Create Gallery Schema

**Status**: ✅ Completed

**Tasks**:

1. Define gallery images collection
2. Fields: image, caption, order

**Schema fields**:

```typescript
{
  image: image (required),
  caption: string (required, isTitle),
  order: number (Display Order - lower numbers appear first)
}
```

**Test**:

```bash
npm run dev
# Go to /admin
# Add multiple gallery images
# Verify image upload and ordering works
```

---

## Phase 3: Layout and Components

### Step 3.1: Create Base Layout

**Status**: ✅ Completed

**Tasks**:

1. Create main layout component
2. Add meta tags and SEO basics
3. Include global styles
4. Set up dark theme body styles

**Files to create**:

- `src/layouts/BaseLayout.astro`

**Test**:

```bash
npm run dev
# Page should have dark background
# Check meta tags in page source
```

---

### Step 3.2: Create Header/Navigation Component

**Status**: ✅ Completed

**Tasks**:

1. Create sticky header
2. Add logo and restaurant name
3. Navigation links (smooth scroll to sections)
4. Mobile responsive menu

**Files to create**:

- `src/components/Header.astro`

**Test**:

```bash
npm run dev
# Header visible and sticky on scroll
# Navigation links work (smooth scroll)
# Mobile menu toggles correctly
```

---

### Step 3.3: Create Footer Component

**Status**: ✅ Completed

**Tasks**:

1. Contact information display
2. Social media links
3. Legal links (Impressum, Datenschutz)
4. Copyright notice

**Files created**:

- `src/components/Footer.astro`

**Test**:

```bash
npm run dev
# Footer displays at bottom
# All links functional
# Responsive on mobile
```

---

## Phase 4: Page Sections

### Step 4.1: Create Hero Section

**Status**: ✅ Completed

**Tasks**:

1. Full-width hero with background image
2. Restaurant name and tagline
3. Call-to-action button (scroll to menu)
4. Dark overlay for text readability

**Files created**:

- `src/components/Hero.astro`

**Test**:

```bash
npm run dev
# Hero displays full width
# Text readable over image
# CTA button scrolls to menu
# Content editable via Tina
```

---

### Step 4.2: Create About Section

**Status**: ✅ Completed

**Tasks**:

1. Restaurant story/philosophy
2. Typography styling (Oswald headings, Lato body)
3. Optional image

**Files created**:

- `src/components/About.astro`

**Test**:

```bash
npm run dev
# About section displays correctly
# Fonts render properly
# Content editable via Tina
```

---

### Step 4.3: Create Menu Section

**Status**: ✅ Completed

**Tasks**:

1. Category tabs/filters (Burgers, Sides, Drinks)
2. Menu item cards (name, description, price, image)
3. Grid layout for items
4. Handle "not available" items

**Files created**:

- `src/components/Menu.astro`
- `src/components/MenuItem.astro`

**Test**:

```bash
npm run dev
# All menu items display by category
# Prices formatted correctly (€)
# Images display properly
# Items editable via Tina
# Category filtering works
```

---

### Step 4.4: Create Location Section

**Status**: ✅ Completed

**Tasks**:

1. Address display
2. Opening hours
3. Phone number (clickable tel: link)
4. Location image or map placeholder

**Files created**:

- `src/components/Location.astro`

**Test**:

```bash
npm run dev
# All location info displays
# Phone number clickable
# Content editable via Tina
```

---

### Step 4.5: Create Gallery Section

**Status**: ✅ Completed

**Tasks**:

1. Image grid layout
2. Lightbox functionality (optional, keep simple)
3. Responsive grid

**Files created**:

- `src/components/Gallery.astro`

**Test**:

```bash
npm run dev
# Images display in grid
# Responsive on all screen sizes
# Images editable via Tina
```

---

### Step 4.6: Create Contact Section

**Status**: ✅ Completed

**Tasks**:

1. Display contact information
2. Phone number (clickable)
3. Email (clickable mailto:)
4. Social media links

**Files created**:

- `src/components/Contact.astro`

**Test**:

```bash
npm run dev
# Contact info displays
# Links functional
# Content editable via Tina
```

---

## Phase 5: Main Page Assembly

### Step 5.1: Assemble Index Page

**Status**: ✅ Completed

**Tasks**:

1. Import all components
2. Fetch content from Tina
3. Pass data to components
4. Proper section ordering

**Files modified**:

- `src/pages/index.astro`

**Notes**:

- About section was removed due to TinaCMS rich-text caching issues
- Page now displays: Hero, Menu, Location, Gallery, Contact sections

**Test**:

```bash
npm run dev
# All sections render in order
# Content loads from Tina
# Smooth scrolling between sections
# Full responsive check (mobile/tablet/desktop)
```

---

## Phase 6: Sample Content

### Step 6.1: Add Sample Content

**Status**: ✅ Completed

**Tasks**:

1. Add placeholder menu items (5-10 items per category)
2. Add hero content
3. Add location details
4. Add gallery images
5. Add site settings

**Content Added**:

- **Menu Items**: 16 total (6 burgers, 5 sides, 5 drinks)
- **Hero**: Title, subtitle, CTA button, background image reference
- **Location**: Name, address, phone, hours, image reference
- **Gallery**: 5 images with captions and order
- **Settings**: Complete with contact info and social links

**Placeholder Images** (need to be replaced with actual images):

```
public/uploads/hero/hero-background.jpg
public/uploads/location/restaurant-exterior.jpg
public/uploads/menu/*.jpg (16 images)
public/uploads/gallery/*.jpg (5 images)
```

**Test**:

```bash
npm run dev
# Site looks complete with sample content
# All sections populated
# Test editing content via /admin
```

---

## Phase 7: Legal Pages

### Step 7.1: Create Impressum Page

**Status**: ✅ Completed

**Tasks**:

1. Create Impressum page
2. Add placeholder legal content

**Files created**:

- `src/pages/impressum.astro`

**Content includes**:

- Angaben gemäß § 5 TMG
- Contact information (pulled from Tina CMS)
- Umsatzsteuer-ID placeholder
- Verantwortlich für den Inhalt
- Streitschlichtung (EU ODR platform link)
- Haftung für Inhalte
- Haftung für Links
- Urheberrecht

**Test**:

```bash
npm run dev
# Navigate to /impressum
# Page renders correctly ✅
# Footer links work ✅
```

---

### Step 7.2: Create Datenschutz Page

**Status**: ✅ Completed

**Tasks**:

1. Create Datenschutz (Privacy Policy) page
2. Add placeholder legal content

**Files created**:

- `src/pages/datenschutz.astro`

**Content includes**:

- Datenschutz auf einen Blick
- Hinweis zur verantwortlichen Stelle
- Speicherdauer
- Rechtsgrundlagen der Datenverarbeitung
- Betroffenenrechte (Auskunft, Berichtigung, Löschung, etc.)
- Datenerfassung auf dieser Website
- Soziale Medien
- Änderungen der Datenschutzerklärung

**Test**:

```bash
npm run dev
# Navigate to /datenschutz
# Page renders correctly ✅
# Footer links work ✅
```

---

## Phase 8: Final Testing & Documentation

### Step 8.1: Full Build Test

**Status**: ✅ Completed

**Tasks**:

1. Run production build
2. Test preview server
3. Check for build errors
4. Verify all pages generate

**Build Process**:

Note: The current build requires Tina dev server running to fetch content. Use this command:

```bash
# Start Tina in background, build, then stop
npx tinacms dev &
sleep 5
npx astro build
pkill -f "tinacms dev"
```

Or simply run `npx astro build` if Tina dev server is already running.

**Results**:

- ✅ Build completed successfully (474ms)
- ✅ 3 pages generated:
  - `/index.html` (Homepage with all sections)
  - `/impressum/index.html` (Legal notice)
  - `/datenschutz/index.html` (Privacy policy)
- ✅ Preview server runs correctly on port 4321
- ✅ All content loads from Tina CMS
- ⚠️ Some placeholder images return 404 (need actual images in `/public/uploads/`)

**Test**:

```bash
npm run preview
# Visit http://localhost:4321 ✅
# Visit http://localhost:4321/impressum ✅
# Visit http://localhost:4321/datenschutz ✅
```

---

### Step 8.2: Responsive Testing

**Tasks**:

1. Test on mobile (375px)
2. Test on tablet (768px)
3. Test on desktop (1280px+)
4. Fix any layout issues

**Test**:

- Use browser dev tools responsive mode
- Check all sections at each breakpoint

---

### Step 8.3: Accessibility Check

**Tasks**:

1. Verify color contrast (WCAG AA)
2. Check alt text on images
3. Keyboard navigation
4. Screen reader basics

**Test**:

- Use Lighthouse audit
- Tab through entire page

---

### Step 8.4: Create Editor Documentation

**Tasks**:

1. Document how to access admin panel
2. Explain content editing workflow
3. Image upload guidelines
4. Content update process

**Files to create**:

- `docs/editor-guide.md`

**Test**:

- Follow guide as non-technical user
- Verify all steps are clear

---

## Phase 9: Deployment Preparation

### Step 9.1: Configure for Deployment

**Tasks**:

1. Add deployment configuration
2. Set up environment variables
3. Configure Tina Cloud (for production editing)

**Files to create/modify**:

- `netlify.toml` or `vercel.json`
- `.env.example`

**Test**:

```bash
# Deploy to preview environment
# Verify site works in production
# Test Tina Cloud editing
```

---

## Summary Checklist

### Phase 1: Foundation

- [x] 1.1 Astro project initialized
- [x] 1.2 Tina CMS configured
- [x] 1.3 Tailwind CSS with dark theme
- [x] 1.4 Google Fonts configured
- [x] 1.5 Code quality tools set up

### Phase 2: Content Schemas

- [x] 2.1 Site settings schema
- [x] 2.2 Menu items schema
- [x] 2.3 Page content schema
- [x] 2.4 Location schema
- [x] 2.5 Gallery schema

### Phase 3: Layout & Components

- [x] 3.1 Base layout
- [x] 3.2 Header/Navigation
- [x] 3.3 Footer

### Phase 4: Page Sections

- [x] 4.1 Hero section
- [x] ~~4.2 About section~~ (removed)
- [x] 4.3 Menu section
- [x] 4.4 Location section
- [x] 4.5 Gallery section
- [x] 4.6 Contact section

### Phase 5: Assembly

- [x] 5.1 Index page assembled

### Phase 6: Content

- [x] 6.1 Sample content added

### Phase 7: Legal

- [x] 7.1 Impressum page
- [x] 7.2 Datenschutz page

### Phase 8: Testing & Docs

- [x] 8.1 Build test passed
- [ ] 8.2 Responsive testing
- [ ] 8.3 Accessibility check
- [ ] 8.4 Editor documentation

### Phase 9: Deployment

- [ ] 9.1 Deployment configured

---

## Notes

- Each step should be committed separately for easy rollback
- Test after each step before proceeding
- Keep components simple and focused
- Prioritize content editability over fancy features
