# Hero Section Architecture

## Why We Separate HeroSection

Instead of writing all UI directly inside Home.tsx,
we separate feature modules.

---

## Benefits

- cleaner pages
- reusable architecture
- scalability
- easier maintenance

---

## Hero Section Responsibilities

- introduction
- CTA buttons
- branding
- statistics
- responsive layout

---

## HeroStats

HeroStats is extracted as a reusable child component.

This improves:
- readability
- modularity
- maintainability