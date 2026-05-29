# ConeCoreRun 🍦

> A real-world racing game built around Stewart's Shops — 364+ locations across upstate New York, Vermont, and New Hampshire.

**Status:** Beta concept · Confidential

---

## What is this?

ConeCoreRun is a location-based loyalty game inspired by the Cannonball Run. Players race to visit every Stewart's Shops location across the network by finding hidden QR codes inside each store. No purchase required — but you have to physically be there.

## Project structure

```
conecorerun/
├── docs/               # Concept documentation
│   ├── stewarts_game_concept.pdf
│   └── stewarts_shops_locations.md
├── pitch/              # Password-protected presentation site
│   └── index.html
└── app/                # App prototype (in development)
    ├── index.html
    ├── screens/
    └── assets/
```

## Key concepts

- **Scoops** — points earned by checking in, completing counties, earning bonuses
- **Pioneer bonus** — extra Scoops for visiting low-traffic locations
- **Loyal bonus** — extra Scoops for checking in near a competitor
- **Dairy bonus** — honor-system confirmation of a dairy purchase
- **Quiet exit** — one-tap data sharing pause, no explanation required

## Safety & privacy

This game is built with domestic violence survivor safety as a foundational constraint — not a feature. No live location sharing. Stats only visible to competitors. The quiet exit is always one tap away. See `docs/stewarts_shops_locations.md` for the full safety framework.

**Key partners:**
- [Wellspring](https://wellspringcares.org) — Saratoga County DV & Sexual Assault Services · 518-584-8188
- [NNEDV Safety Net](https://techsafety.org) — safetynet@nnedv.org

## Development

Built with vanilla HTML/CSS/JS. No framework dependencies. Designed to deploy as a single file on any static host or subdomain.

---

*Confidential concept document — not for distribution*
