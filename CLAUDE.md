# Max Help Docs — Project Guide

## Purpose
Internal + merchant-facing documentation for Max AI inside the Prosperna platform. Covers all Max agent capabilities: Orchestrator, Image Editor, Social Marketing, Merchandiser, Copywriter, Builder, Insights, and Guardrails.

## Tech Stack
- React 19 + Vite
- Framer Motion (page transitions, sidebar mobile animation only)
- Lucide React (icons)
- Custom CSS (single file: `src/App.css`) — no Tailwind, no component library

---

## Design System

### Philosophy
This documentation should feel like it was designed by a real design team, not auto-generated. It should be **editorial, clean, and confident** — closer to Stripe Docs or Linear's site than a generic AI doc template.

Rules:
- Typography and whitespace do the heavy lifting. Not boxes, not shadows, not gradients.
- Color is an accent, not a background fill.
- Structural clarity comes from spacing and type hierarchy, not borders or cards.
- Every element should have a reason to exist.

### Color Palette

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0F172A` | Primary headings, strong text |
| `--body` | `#334155` | Body copy |
| `--muted` | `#94A3B8` | Secondary text, captions, placeholders |
| `--accent` | `#7C3AED` | Primary brand accent (purple) |
| `--accent-light` | `#EDE9FE` | Tinted surfaces (notes, highlights) |
| `--border` | `#E2E8F0` | Dividers, outlines |
| `--page-bg` | `#F8FAFC` | Page background |
| `--surface` | `#FFFFFF` | Content surface |

Callout tints (flat fills, no borders):

| Variant | Background | Label Color |
|---|---|---|
| tip | `#F5F3FF` | `#7C3AED` |
| info | `#EFF6FF` | `#2563EB` |
| warning | `#FFFBEB` | `#D97706` |
| success | `#F0FDF4` | `#16A34A` |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Page / doc title (h1) | Outfit | 800 | `clamp(1.75rem, 3vw, 2.5rem)` |
| Section title (h2) | Outfit | 700 | `1.5rem` |
| Subsection (h3) | Outfit | 600 | `1.1rem` |
| Body | Inter | 400 | `0.95rem` |
| Muted / caption | Inter | 400 | `0.85rem` |
| Label / kicker | Inter | 700 | `0.7rem`, uppercase, letter-spaced |
| Code inline | JetBrains Mono / Fira Code | 400 | `0.85em` |

Line height: `1.75` for body, `1.3` for headings.

### Spacing
Use multiples of 8px. Common values:
- `0.5rem` (8px) — tight gaps
- `1rem` (16px) — between related elements
- `1.5rem` (24px) — between sections within a doc
- `2.5rem` (40px) — between major doc sections
- `4rem` (64px) — page-level vertical padding

### Border Radius
- **Default for any box/block**: `6px` maximum
- **Pill tags / badges**: `999px`
- **Icons**: `8px`
- Never use `20px`, `24px`, `28px` radius — this looks like a generic AI component

### Shadows
Avoid decorative shadows. The only acceptable shadow:
- `0 1px 3px rgba(0,0,0,0.08)` — for elevated elements like dropdowns
- Prefer borders (`1px solid var(--border)`) over shadows for delineation

---

## Component Patterns

### Do not use these patterns
- **Glassmorphism** (`backdrop-filter: blur(...)`, semi-transparent backgrounds on content areas) — looks dated and generic
- **Left-border callouts** (`border-left: 3px solid`) — overused, looks auto-generated
- **Gradient backgrounds** on content sections or cards
- **Heavy rounded corners** (`border-radius > 8px`) on content blocks
- **Card grids** for listing features/agents — use a flat list or table instead
- **`.panel` as a generic wrapper** — each section should control its own layout
- **Floating/drop-shadow cards** — `box-shadow` with large blur and spread
- **Sparkle/blob background decorations** — distracting and generic

### Callout / Note blocks
A flat tinted block with no left border. The variant type appears as a small uppercase pill label **above** the title.

```
┌──────────────────────────────────┐
│  TIP                             │  ← small uppercase colored pill
│  Title text here                 │  ← h3, semi-bold
│  Body content...                 │
└──────────────────────────────────┘
```
Background is a flat tint color. No border-left. No border at all. Corner radius: 6px.

### Sidebar navigation
Clean vertical nav. Active item: accent background, white text, 6px radius. No heavy effects.
Groups labeled with a small uppercase section header. Search at the top.
On mobile: slides in from left as a drawer, rest of screen dimmed.

### Agent / feature lists (Overview page)
Use a horizontal-rule separated list, not a card grid. Each entry is a row:
- Left: small icon in an accent-tinted square (32px, 6px radius)
- Middle: bold name + short description
- Right: "Learn more →" text link

### Doc pages
No wrapper panel. Content sits directly on the page background.
Doc header: large h2 title with badges inline, subtitle below in muted color.
Sections within a doc separated by `2.5rem` vertical space and optionally a thin `<hr>`.

### Badges / tags
Small pill: `0.65rem` uppercase, `--accent` color, `--accent-light` background, `999px` radius, no border.

### Steps / numbered lists
Counter-based CSS. Number rendered as a small accent-colored circle. No heavy styling.

### Image placeholders
A simple dashed box with a muted label and filename. Minimal — it's a placeholder, not a feature.

---

## File Structure
```
src/
  App.jsx              — App shell, tab state, sidebar
  App.css              — All styles (single file)
  components/
    Sidebar.jsx        — Sidebar nav + mobile drawer
    Search.jsx         — Keyword search
  docs/
    sections/          — One file per doc section
    shared/
      DocPage.jsx      — Doc layout wrapper (title, subtitle, badges)
      Callout.jsx      — Flat tinted note/tip/warning block
      ImagePlaceholder.jsx
      InlineCode.jsx
  assets/              — Images
```

---

## What "Max" Is
Max is Prosperna's AI assistant embedded in the merchant dashboard. It has specialist sub-agents (Image Editor, Merchandiser, etc.) that merchants switch to via a composer chip in the chat. This documentation helps merchants and internal staff understand what each agent does and how to use it effectively.
