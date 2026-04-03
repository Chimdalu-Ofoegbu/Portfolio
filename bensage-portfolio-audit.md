# Bensage Portfolio — Design Audit & Development Reference

**File:** Figma `baBbtrxSYREJCJR5nnNXnZ`
**Domain:** bensage.design
**Stack:** Next.js (App Router) + CSS Modules + Framer Motion
**Deploy:** Netlify
**Date:** March 30, 2026

---

## Pages

| Page | Figma Node | Source | Status |
|------|------------|--------|--------|
| Homepage / Landing | — | `Portfolio_Landing_recent.jsx` (existing code) | Port to Next.js |
| Case Study (BlockNads) | `6161:4281` ("Spotlight 1") | Figma MCP audit | Build from Figma |
| Resume | `6241:4162` ("Product Resume") | Figma MCP audit | Build from Figma |

---

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#030303` | Landing page background |
| `--bg-resume` | `#0b0b0b` | Resume page background |
| `--text-primary` | `#fafafa` | Primary text, borders |
| `--text-dark` | `#030303` | Text on filled/light elements |
| `--border-subtle` | `rgba(250,250,250,0.25)` | Grid lines, inactive tabs, skill boxes |
| `--border-card` | `rgba(250,250,250,0.35)` | Spotlight card borders (landing) |
| `--border-card-hover` | `rgba(250,250,250,0.8)` | Card hover state |
| `--fill-primary` | `#fafafa` | Filled buttons, active tabs |
| `--fill-white` | `#ffffff` | Resume contact buttons, experience UI cards |
| `--fill-black` | `#000000` | Resume card borders |

### Typography

| Role | Font Family | Weight | Size | Line Height | Letter Spacing |
|------|------------|--------|------|-------------|----------------|
| Hero heading | Neue Machina | 800 (Ultrabold) | 88px | 1.28 | -0.01em |
| Section mega-titles (Experience, Skills) | Neue Machina | 800 | 221.17px | normal | — |
| Resume name | Neue Machina | 800 | 80px | normal | — |
| Company name / Role title | Neue Machina | 800 | 48px | normal / 56px | — |
| Tab labels | Neue Machina | 400 (inactive) / 800 (active) | 40px | — | — |
| CTA button text | Neue Machina | 800 | 24px | — | — |
| Header brand | Neue Machina | 300 | 24px | 1.28 | — |
| Header marker num | IBM Plex Mono | 500 | 24px | — | — |
| Body / descriptions | IBM Plex Mono | 300 | 20–24px | 1.618 | — |
| Skill items | Neue Machina | 400 (Regular) | 24px | normal | — |
| Contact button labels | Neue Machina | 800 | 20.69px | normal | — |
| Achievement bullets | Neue Machina | 300 (Light) | 20px | 1.618 | — |
| Bold inline spans | Neue Machina | 800 | inherits | 1.618 | — |

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap');
/* Neue Machina: self-hosted — weights 300, 400, 800 */
```

### Spacing System

| Token | Value | Context |
|-------|-------|---------|
| `--page-max-width` | 1440px | All pages |
| `--content-box-width` | 1312px | Border-box container (landing + resume) |
| `--spotlight-content-width` | 1128px (landing) / 1138.34px (case study) | Card container |
| `--section-gap-xl` | 384px | Hero → Spotlight section (landing) |
| `--section-gap-lg` | 160px | Header → content (case study) |
| `--section-gap-md` | 128px | Between spotlight cards (case study) |
| `--section-gap-sm` | 64px | Between experience cards, skill columns, section → list |
| `--section-gap-xs` | 48px | Between spotlight cards (landing) |
| `--card-gap-inner` | 32px | Internal spacing in cards, CTA gap, skills list gap |
| `--card-gap-items` | 16px | Skill item gap, achievement bullet gap |
| `--header-padding-top` | 66px | Header from top |
| `--header-padding-x` | 64px | Header horizontal padding |
| `--hero-padding-top` | 78px | Hero from header |
| `--hero-heading-margin-top` | 86px | Heading from top of hero |
| `--hero-body-margin-top` | 32px | Body text below heading |
| `--cta-margin-top` | 64px | CTAs below body |
| `--footer-margin-top` | 260px | Footer from content |
| `--footer-padding-bottom` | 120px | Footer bottom padding |
| `--border-box-padding` | 138px 92px 80px | Landing border-box (top right/left bottom) |

### Border Radii

| Token | Value | Context |
|-------|-------|---------|
| `--radius-card-outer` | 32px | Landing spotlight cards |
| `--radius-card-inner` | 24px | Landing inner frame + image |
| `--radius-case-card-outer` | 22.868px | Case study spotlight cards |
| `--radius-case-card-inner` | 17.151px | Case study inner frame |
| `--radius-case-image` | 32px | Case study images |
| `--radius-cta` | 53px | CTA buttons |
| `--radius-experience` | 32px | Resume experience cards |
| `--radius-skill-box` | 16px | Resume skill boxes |
| `--radius-contact-btn` | 6.897px | Resume contact buttons |

### Shadows

| Context | Value |
|---------|-------|
| CTA hover (filled) | `0 0 30px rgba(250,250,250,0.15)` |
| CTA hover (outline) | `0 8px 32px rgba(250,250,250,0.08)` |
| Card hover | `0 30px 100px rgba(250,250,250,0.06), 0 0 0 1px rgba(250,250,250,0.1)` |
| Card inner hover | `inset 0 0 60px rgba(250,250,250,0.03)` |

---

## Animations

### Keyframes

| Name | From | To | Duration | Easing | Delay |
|------|------|----|----------|--------|-------|
| `heroReveal` | opacity:0, translateY(50px), clip-path:inset(100% 0 0 0) | opacity:1, translateY(0), clip-path:inset(0) | 1s | cubic-bezier(0.22,1,0.36,1) | 0.5s |
| `fadeSlideUp` | opacity:0, translateY(30px) | opacity:1, translateY(0) | 0.8s | ease | varies |
| `fadeIn` | opacity:0 | opacity:1 | — | — | — |
| `lineGrowY` | scaleY(0) | scaleY(1) | 1.4s | cubic-bezier(0.22,1,0.36,1) | 0.3–0.5s |
| `lineGrowX` | scaleX(0) | scaleX(1) | 1.2s | cubic-bezier(0.22,1,0.36,1) | 0.2–0.4s |
| `slideDown` | opacity:0, translateY(-16px) | opacity:1, translateY(0) | 0.7s | ease | 0.1s |

### Transition Curves

| Context | Curve |
|---------|-------|
| Hero/grid reveal | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Card hover, CTA hover, tabs | `cubic-bezier(0.16, 1, 0.3, 1)` |
| General transitions | `ease` |

### Hover States

| Element | Transform | Additional |
|---------|-----------|------------|
| Spotlight card | `translateY(-8px) scale(1.005)` | border-color → 0.8 opacity, box-shadow |
| Spotlight image | `scale(1.04)` | `filter: brightness(1.08)` |
| CTA filled | `translateY(-3px) rotate(-3.725deg)` | bg → transparent, glow shadow |
| CTA outline | `translateY(-3px) rotate(3.725deg)` | bg → filled, shadow |
| Contact link | `scale(1.04)` | color → 0.25 opacity, underline removed |
| Tab (inactive hover) | — | border + color → full opacity, bg → 0.1 |

---

## Component Map

### Shared Components

| Component | Used On | Notes |
|-----------|---------|-------|
| `Header` | Landing | Dot marker + "001" + centered brand |
| `GridLines` | Landing | 2 vertical (10.28%, 89.72%) + 2 horizontal (38px, 126px) |
| `Footer` | Landing | Contact links: LinkedIn, Twitter, Email with arrow icons |
| `CustomCursor` | All pages | Context-aware cursor states |
| `PageTransition` | All pages | Framer Motion AnimatePresence |

### Landing Page Components

| Component | Specs |
|-----------|-------|
| `Hero` | Heading 88px/1.28, body 20px IBM Plex Mono, 2× CTA buttons |
| `TabSwitcher` | 2 tabs (Spotlight / Projects), 572px each, 160px tall |
| `SpotlightCard` | 1128px wide, 32px outer radius, 24px inner, 608px inner height |
| `ProjectCard` | Same shell as SpotlightCard, placeholder content |

### Case Study Page Components (Spotlight 1 — BlockNads)

| Component | Specs |
|-----------|-------|
| `CaseStudyHeader` | Logo + "×" + BENSAGE, 24px description below |
| `SpotlightFrame` | 1138.34px wide, 22.87px outer / 17.15px inner radius |
| `SpotlightImage` | 1024px wide, 32px radius, various heights |

**Spotlight Content Blocks (6 total):**

| # | Name | Inner Height | Content |
|---|------|-------------|---------|
| 1 | Spotlight 1 | 728.18px | Project intro frame |
| 2 | Spotlight 2 | 728.18px | Design showcase |
| 3 | Spotlight 3 | 728.18px | Feature detail |
| 4 | Spotlight 4 (Team) | 1425.78px | Team section — taller card |
| 5 | Spotlight 5 (Gallery) | 1006.93px | Parallax gallery navigation |
| 6 | Spotlight 6 (Footer) | 713.24px | Project footer / closing |

**Component variants:** Each has `property1: "Default" | "Hover"` states.

### Resume Page Components

| Component | Specs |
|-----------|-------|
| `ResumeName` | 80px Ultrabold, left-aligned at 64px |
| `ResumeTagline` | 20px Light, line-height 1.618 |
| `ContactButtons` | 3 stacked (Email/LinkedIn/Twitter), white bg, 308×56px, radius 6.9px |
| `ExperienceCard` | 1312px wide, white border, 32px radius, 32px padding |
| `CompanyLogo` | Custom arrow SVG (126×36px "Subtract", rotated 180°) |
| `AchievementBullet` | 8×8px white square rotated 45° (diamond) + text |
| `SkillBox` | Border 0.5px, radius 16px, padding 32px |
| `ExperienceBar` | Full-width bottom section with UI badges |

**Experience Entries:**

| Company | Role | Duration |
|---------|------|----------|
| Beradrome | Product Designer | June 2023 – February 2025 |
| Fedix Labs | UI UX Designer | Nov 2022 – July 2023 |
| Ayoken Labs | Lead Designer | Nov 2021 – Nov 2022 |
| 1Hive DAO | Product Designer | Aug 2021 – Sep 2022 |

**Skills Grid (3 columns):**

| Design | Other | Tools |
|--------|-------|-------|
| User Interface Design | User Research | Figma |
| User Experience Design | Usability Testing | Adobe XD |
| Interaction Design | User Journey Mapping | Adobe Illustrator |
| Wireframing | A/B Testing | Adobe Photoshop |
| Rapid Prototyping | — | Notion |

---

## Layout Measurements (Grid)

### Landing Page

```
Page:           1440px max-width
Grid lines:     vertical at 10.28% (148px) and 89.72% (1292px)
                horizontal at 38px and 126px from top
Content box:    1312px wide, centered
Spotlight area: 1128px wide, centered within content box
```

### Case Study Page

```
Page:           1440px wide, 8579px tall
Outer border:   1312px wide, centered, 1px solid #fafafa
Content:        1138.34px wide, offset 150.36px from left edge
Header area:    starts at 385.57px from top
Spotlight gap:  128px between cards, 160px from header to cards
Card padding:   11.43px outer, 45.74px inner
```

### Resume Page

```
Page:           1440px wide
Name block:     64px from left edge, 523.49px from top
Contact btns:   1068px from left, 562–739px from top
Dividers:       full-width at 15.23% and 66.11% from top
Experience:     centered, starts at 922.27px from top
Skills:         64px from left, starts at 3855.11px from top
Experience bar: full-width at 5187.12px from top
```

---

## Figma Asset URLs (7-day expiry)

### Case Study Page

| Asset | URL |
|-------|-----|
| Footer 1 | `https://www.figma.com/api/mcp/asset/924770d9-f550-4593-a309-694e920eba17` |
| Gallery Parallax | `https://www.figma.com/api/mcp/asset/3c2d83e6-aefd-49b0-bb39-ac1a0a0578bb` |
| Team | `https://www.figma.com/api/mcp/asset/c8fe1a04-eec5-4603-a802-ad73b41fa9c2` |
| Spotlight Frame 1 | `https://www.figma.com/api/mcp/asset/d3207650-d7c7-4dad-a33b-15db137ed1ae` |
| Spotlight Frame 2 | `https://www.figma.com/api/mcp/asset/13384967-7110-4474-b5d1-6f5c498438e1` |
| Spotlight Frame 3 | `https://www.figma.com/api/mcp/asset/88728c13-76e6-4b7d-a571-e8afea7a3d41` |
| Logo + Designer | `https://www.figma.com/api/mcp/asset/558c0686-038f-4df1-9999-cbe3a4228b91` |

### Resume Page

| Asset | URL |
|-------|-----|
| Resume header | `https://www.figma.com/api/mcp/asset/2dc34cfe-738e-4d58-945a-fb6d644b4ecc` |
| Divider | `https://www.figma.com/api/mcp/asset/2948e337-21ce-4f1b-a9f5-417c80389857` |
| Subtract arrow | `https://www.figma.com/api/mcp/asset/e661ed69-3274-45a6-be79-ef5f9d826794` |
| UI badge | `https://www.figma.com/api/mcp/asset/b1cc82b3-01f3-4b43-9bff-86248feb7532` |
| Resume text blocks | Multiple (see Figma context output) |

### Landing Page

| Asset | URL |
|-------|-----|
| BlockNads spotlight | `https://www.figma.com/api/mcp/asset/20a29590-e5b3-4d41-92d1-3825be47e0fa` |
| RigIt spotlight | `https://www.figma.com/api/mcp/asset/f0067dce-6f14-479e-a78b-ddec4147e915` |

---

## Interaction Requirements

### Page Transitions (Framer Motion)
- AnimatePresence with layout animations between routes
- Fade + slide direction based on navigation context

### Case Study Lightbox
- Click spotlight card → fullscreen modal
- Swipe / arrow key navigation between images
- Smooth scale-in animation on open
- Backdrop blur + dimmed overlay

### Dark/Light Mode
- `next-themes` with CSS variable swap
- Toggle component in header
- Default: dark (matches current design)

### Custom Cursor
- GPU-accelerated follower (lerped position)
- States: default, pointer (on links/buttons), expand (on images/cards)
- Smooth size/opacity transitions between states

### Scroll Animations
- Cards fade-slide-up on scroll into viewport
- Grid lines grow on initial load
- Staggered entry for card lists

---

## Project Structure

```
bensage-portfolio/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata, cursor
│   ├── page.tsx                ← Homepage / Landing
│   ├── spotlight/
│   │   └── [slug]/page.tsx     ← Case study pages
│   └── resume/
│       └── page.tsx            ← Resume page
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── SpotlightCard/
│   │   ├── SpotlightCard.tsx
│   │   └── SpotlightCard.module.css
│   ├── TabSwitcher/
│   │   ├── TabSwitcher.tsx
│   │   └── TabSwitcher.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── ExperienceCard/
│   │   ├── ExperienceCard.tsx
│   │   └── ExperienceCard.module.css
│   ├── SkillBox/
│   │   ├── SkillBox.tsx
│   │   └── SkillBox.module.css
│   ├── ContactButtons/
│   │   ├── ContactButtons.tsx
│   │   └── ContactButtons.module.css
│   ├── CaseStudyHeader/
│   │   ├── CaseStudyHeader.tsx
│   │   └── CaseStudyHeader.module.css
│   ├── SpotlightFrame/
│   │   ├── SpotlightFrame.tsx
│   │   └── SpotlightFrame.module.css
│   ├── GridLines/
│   │   ├── GridLines.tsx
│   │   └── GridLines.module.css
│   ├── CustomCursor/
│   │   ├── CustomCursor.tsx
│   │   └── CustomCursor.module.css
│   ├── Lightbox/
│   │   ├── Lightbox.tsx
│   │   └── Lightbox.module.css
│   └── PageTransition/
│       ├── PageTransition.tsx
│       └── PageTransition.module.css
├── styles/
│   ├── globals.css             ← CSS variables (tokens), reset, font-face
│   └── animations.css          ← All @keyframes
├── lib/
│   ├── fonts.ts                ← Next.js font loader config
│   └── caseStudies.ts          ← Case study data/content
├── public/
│   ├── fonts/                  ← Neue Machina self-hosted files
│   └── images/                 ← Exported Figma assets
└── next.config.js
```

---

## Build Order

1. **Case Study / Spotlight page** (from Figma) ← FIRST
2. Homepage / Landing (port existing JSX)
3. Resume page (from Figma)
4. Global: custom cursor, page transitions, lightbox
5. Dark/light mode toggle
6. QA pass: Figma vs browser at all breakpoints
7. Deploy to Netlify
