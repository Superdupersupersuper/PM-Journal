# PM Journal

A structured trading journal for prediction markets (Polymarket, Kalshi).

## What it does

- **Calendar** — daily morning planners, trade reviews, news events you want to track.
- **Projects** — long-running market deep-dives where you log new info each day.
- **Accounts** — Polymarket and Kalshi PNL, tagged trades, performance analytics.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Supabase (Postgres + auth) — wired up in Phase 0b
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys (Phase 0b onward)
npm run dev
```

Open http://localhost:3000.

## Build phases

- **Phase 0a — Scaffold (done)**: Next.js + Tailwind, app shell with sidebar nav, three placeholder pages.
- **Phase 0b — Auth + DB**: Supabase client, single-user login, first table.
- **Phase 1 — Calendar + Morning Planner**: month view, day detail, structured entries.
- **Phase 2 — Projects**: long-running market research workspaces.
- **Phase 3 — Accounts**: CSV import, tagging, PNL charts; then API integration.
