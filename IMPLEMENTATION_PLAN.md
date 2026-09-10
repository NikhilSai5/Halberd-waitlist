# Halberd Waitlist Website - Feature Sections Implementation Plan

## Overview

Replace the current `Features.tsx` section with 4 new focused feature sections (Calendar, Floating Circle, Todo, Digital Pet Cat) while keeping the existing `FinalCTA.tsx` waitlist section. The new sections will follow the exact same design patterns, typography, colors, and animation conventions already established.

---

## Architecture Decisions

### File Structure

| Action | File | Purpose |
|--------|------|---------|
| Replace | `src/components/sections/Features.tsx` | Remove current features grid; replace with Calendar section |
| Create | `src/components/sections/FloatingCircle.tsx` | New Floating Circle section with 4 sub-features |
| Create | `src/components/sections/Todo.tsx` | New Todo section |
| Create | `src/components/sections/DigitalPet.tsx` | New Digital Pet Cat section |
| Modify | `src/pages/Home.tsx` | Update section imports and order |
| Delete | `src/components/previews/CalendarPreview.tsx` | No longer needed (replaced by static images) |
| Delete | `src/components/previews/FocusPreview.tsx` | No longer needed |
| Delete | `src/components/previews/PetPreview.tsx` | No longer needed |

### Section Order (in `Home.tsx`)

```
<Hero />
<QuieterWay />          ← keep existing intro
<Calendar />            ← NEW (replaces Features)
<FloatingCircle />      ← NEW
<Todo />                ← NEW
<DigitalPet />          ← NEW
<Method />              ← keep existing
<Philosophy />          ← keep existing
<FAQ />                 ← keep existing
<FinalCTA />            ← keep existing waitlist
```

---

## Section Designs

### 1. Calendar Section (`Features.tsx` → renamed/replaced)

**Pattern:** Large 2-column layout (text left, image right) — matches the `Method.tsx` header pattern.

```tsx
<section className="border-b border-[#dfded7] py-28 sm:py-36">
  <div className="section-wrap">
    <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.3fr] lg:gap-28">
      <div>
        <p className="eyebrow mb-5">01 / Calendar</p>
        <h2 className="max-w-[340px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
          Your schedule, <span className="display-serif">connected.</span>
        </h2>
        <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
          Connect Google Calendar and keep your schedule within your productivity space.
        </p>
      </div>
      <Reveal delay="delay-1">
        <img src="/calendar.png" alt="Halberd calendar connected to Google Calendar" className="w-full rounded-lg" />
      </Reveal>
    </Reveal>
  </div>
</section>
```

**Key details:**
- Uses `eyebrow` class with `01 / Calendar` label
- Display serif italic on "connected"
- Reveal animation with delay on image
- Same section padding (`py-28 sm:py-36`) and border pattern

---

### 2. Floating Circle Section (`FloatingCircle.tsx`)

**Pattern:** Complex section with header + 4 sub-feature cards in a 2x2 grid. This is the most content-heavy section.

**Structure:**
- Section header (eyebrow + heading + description)
- 4 feature cards in a responsive grid
- Each card: numbered eyebrow, heading, description, image

```tsx
<section className="border-b border-[#dfded7] py-28 sm:py-36">
  <div className="section-wrap">
    {/* Header */}
    <Reveal className="mb-16">
      <p className="eyebrow mb-5">02 / Floating Circle</p>
      <h2 className="max-w-[480px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
        Your productivity tools, <span className="display-serif">always within reach.</span>
      </h2>
      <p className="mt-7 max-w-[400px] text-sm leading-6 text-[#666960]">
        A single floating circle gives you quick access to the tools you need throughout your day.
      </p>
    </Reveal>

    {/* 4 Feature Cards */}
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((feature, index) => (
        <Reveal key={feature.number} delay={`delay-${index + 1}`}>
          <div className="rounded-lg border border-[#dfded7] p-6">
            <p className="eyebrow mb-3 text-[#486551]">{feature.number}</p>
            <h3 className="text-xl font-medium tracking-[-.05em]">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#666960]">{feature.description}</p>
            <img src={feature.image} alt={feature.title} className="mt-4 w-full rounded" />
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```

**Feature data:**
```ts
const features = [
  {
    number: '01 — Reminders',
    title: 'Stay ahead of what matters.',
    description: 'Get gentle nudges for what needs your attention.',
    image: '/floating_circle_calendar_notification.png'
  },
  {
    number: '02 — Focus Mode',
    title: 'Create space for focused work.',
    description: 'Minimize distractions and stay in the zone.',
    image: '/floating_circle_focus_mode.png'
  },
  {
    number: '03 — Habits',
    title: 'Build habits that stick.',
    description: 'Track and maintain your daily routines.',
    image: '/floating_circle_habit remainder.png'
  },
  {
    number: '04 — Pomodoro',
    title: 'Work in focused intervals.',
    description: 'Structured work sessions with built-in breaks.',
    image: '/floating_circle_pomodoro.png'
  }
];
```

**Key details:**
- 2x2 responsive grid (`sm:grid-cols-2`)
- Cards have subtle border and padding
- Each card uses `eyebrow` with green color for numbering
- Consistent typography patterns

---

### 3. Todo Section (`Todo.tsx`)

**Pattern:** Mirrors the Calendar section exactly (2-column layout, text left, image right).

```tsx
<section className="border-b border-[#dfded7] py-28 sm:py-36">
  <div className="section-wrap">
    <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.3fr] lg:gap-28">
      <div>
        <p className="eyebrow mb-5">03 / Todo</p>
        <h2 className="max-w-[340px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
          Your tasks, <span className="display-serif">connected.</span>
        </h2>
        <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
          Connect Google Tasks and keep your tasks within your productivity space.
        </p>
      </div>
      <Reveal delay="delay-1">
        <img src="/todo.png" alt="Halberd todo connected to Google Tasks" className="w-full rounded-lg" />
      </Reveal>
    </Reveal>
  </div>
</section>
```

---

### 4. Digital Pet Cat Section (`DigitalPet.tsx`)

**Pattern:** Centered layout with image and text. Different from the 2-column pattern to add visual variety.

```tsx
<section className="border-b border-[#dfded7] py-28 sm:py-36">
  <div className="section-wrap">
    <Reveal className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <Reveal delay="delay-1">
        <img src="/only cat.png" alt="Halberd digital pet cat" className="w-full rounded-lg" />
      </Reveal>
      <div>
        <p className="eyebrow mb-5">04 / Digital Pet</p>
        <h2 className="max-w-[380px] text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]">
          Your productivity <span className="display-serif">companion.</span>
        </h2>
        <p className="mt-7 max-w-[310px] text-sm leading-6 text-[#666960]">
          A digital pet cat that stays with you while you work.
        </p>
      </div>
    </Reveal>
  </div>
</section>
```

**Key details:**
- Image on left, text on right (reversed from Calendar/Todo)
- Seraphic italic on "companion"
- Same consistent typography and spacing

---

## Home.tsx Changes

```tsx
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuieterWay } from '@/components/sections/QuieterWay';
import { Calendar } from '@/components/sections/Calendar';      // renamed from Features
import { FloatingCircle } from '@/components/sections/FloatingCircle';
import { Todo } from '@/components/sections/Todo';
import { DigitalPet } from '@/components/sections/DigitalPet';
import { Method } from '@/components/sections/Method';
import { Philosophy } from '@/components/sections/Philosophy';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="grain min-h-[100dvh] overflow-x-hidden">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuieterWay />
        <Calendar />
        <FloatingCircle />
        <Todo />
        <DigitalPet />
        <Method />
        <Philosophy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
```

---

## Design Consistency Checklist

| Element | Pattern Used | Source Reference |
|---------|--------------|------------------|
| Section padding | `py-28 sm:py-36` | All existing sections |
| Border between sections | `border-b border-[#dfded7]` | Features, Method |
| Content container | `.section-wrap` | All sections |
| Eyebrow labels | `eyebrow mb-5` | Features, Method |
| Headings | `text-[clamp(2.5rem,5vw,4.7rem)] font-medium leading-[.94] tracking-[-.07em]` | Features |
| Body text | `text-sm leading-6 text-[#666960]` | Features, Method |
| Green accent | `text-[#486551]` on eyebrows | Features |
| Display serif | `<span className="display-serif">word</span>` | Features, Method, FinalCTA |
| Scroll animations | `<Reveal>` + `delay="delay-{n}"` | All sections |
| Images | Full-width `w-full rounded-lg` | N/A (new pattern) |

---

## Implementation Steps

1. **Create `Calendar.tsx`** — Copy structure from Features, simplify to 2-column with single image
2. **Create `FloatingCircle.tsx`** — Build header + 2x2 grid with 4 feature cards
3. **Create `Todo.tsx`** — Mirror Calendar section structure
4. **Create `DigitalPet.tsx`** — Centered layout with image and text
5. **Update `Home.tsx`** — Replace Features import with new section imports, reorder
6. **Delete `Features.tsx`** — Remove old features section
7. **Delete preview components** — Remove CalendarPreview, FocusPreview, PetPreview (no longer used)
8. **Test** — Run `npm run build` and `npm run lint` to verify

---

## Content Scope

The final page should communicate only:

| Section | Content |
|---------|---------|
| **Calendar** | Google Calendar |
| **Floating Circle** | Reminders, Focus Mode, Habits, Pomodoro |
| **Todo** | Google Tasks |
| **Digital Pet Cat** | Productivity companion |
| **Waitlist** | Join the waitlist |

Nothing more and nothing less.

---

## Assets Required

All images are located in the `public/` directory:

- `/calendar.png`
- `/floating_circle_calendar_notification.png`
- `/floating_circle_focus_mode.png`
- `/floating_circle_habit remainder.png`
- `/floating_circle_pomodoro.png`
- `/todo.png`
- `/only cat.png`

---

## Responsive Behavior

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Calendar | Stacked (text top, image bottom) | Stacked | 2-column |
| Floating Circle | 1-column cards | 2-column grid | 2-column grid |
| Todo | Stacked | Stacked | 2-column |
| Digital Pet | Stacked (image top, text bottom) | Stacked | 2-column (image left, text right) |

---

## Verification Commands

```bash
npm run build    # Verify no build errors
npm run lint     # Verify code quality
npm run dev      # Visual verification in browser
```
