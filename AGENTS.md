# Helitrex — AGENTS.md

<!-- FORMAT RULES — DO NOT REMOVE
This file follows the Omnitrex Harmonised AGENTS.md structure.
AI agents MUST preserve these exact sections when updating this file.
- Keep each section concise (see line targets below)
- Never add new top-level sections — use subsections within existing ones
- When updating Status/Roadmap, move completed items to a "Done" subsection or remove them
- Total file MUST stay under 200 lines
-->

## Identity

Helitrex is a helicopter parts inventory and maintenance tracking platform. Purpose-built for aviation MRO (Maintenance, Repair & Overhaul) operators managing civilian helicopter fleets. Tracks part lifecycle (TSN/TSO/TBO), replacement scheduling, incoming orders, and full audit trail. Built on the Omnitrex platform.

- **Domain:** helicopter.omnitrex.eu
- **Local folder:** `C:\Users\maxim\projects\helicopter-inventory\`
- **Target market:** Swiss and European helicopter operators (EASA Part-M compliant operations)
- **Current state:** Frontend demo shell — all mock data, no backend

## Architecture

### Tech Stack

| Component | Technology | Notes |
|-----------|------------|-------|
| Frontend | Next.js 15 + React 19 + TypeScript | Static export (`output: 'export'`) |
| Styling | Tailwind CSS 3 | Omnitrex cyan/slate theme |
| Icons | Lucide React | Consistent with Omnitrex platform |
| Fonts | Inter + JetBrains Mono | Google Fonts CDN |
| Hosting | Vercel (static) | helicopter.omnitrex.eu |
| Dev port | 3050 | Port allocation: GRC 3000-3007, JobTopper 3010, Sliders 3030, Pyxel 3040-3041, Helitrex 3050 |

### File Structure

```
frontend/src/
├── app/           → 3 pages: inventory, helicopter, operations
├── components/    → layout/, inventory/, helicopter/, operations/
├── data/          → Mock data (parts, helicopters, orders, auditLog)
├── types/         → TypeScript interfaces
└── lib/           → Utility functions (cn, formatCurrency, getHealthColor)
```

### Three Pages

1. **Inventory** — KPI cards, category filter sidebar, searchable/sortable parts table
2. **Helicopter View** — Interactive SVG schematic with clickable system zones, slide-in parts panel
3. **Operations** — Incoming orders, due replacements, audit log (pill-style sub-tabs)

### Mock Data

- 4 helicopters: H145, EC135, Bell 429, AW109 — Swiss registrations (HB-xxx)
- 3 locations: Zurich Hangar, Bern Facility, Geneva Depot
- 54 parts across 10 categories with realistic P/N, S/N, TSN/TSO/TBO
- 10 incoming orders from real suppliers (Airbus, Safran, Honeywell, Collins, Leonardo)
- 18 audit log entries

## Commands

```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Dev server on :3050
npm run build        # Static export to out/
```

## Status

**Demo shell complete** — frontend-only, all mock data, deployed to helicopter.omnitrex.eu.

### What Exists
- Full 3-page interactive demo with Omnitrex visual identity
- Interactive helicopter SVG schematic with health-colored zones
- Searchable/sortable parts inventory with 54 realistic parts
- Operations dashboard with orders, replacements, and audit trail
- pitch.md for Jasper's client conversation

### What Does NOT Exist
- No backend, no database, no authentication
- No real data — everything is hardcoded mock data
- No EASA Part-M compliance logic
- No document management, no reporting

## Roadmap

### If Client Is Interested
- [ ] Requirements gathering meeting (2-3 sessions)
- [ ] EASA Part-M compliance requirements analysis
- [ ] Database schema design (PostgreSQL on Supabase)
- [ ] Authentication and multi-tenant architecture
- [ ] Real part lifecycle tracking with alerts
- [ ] Document management (ARC, CRS, work orders)
- [ ] Reporting and export (CSV, PDF)
- [ ] MVP pilot with client fleet data

## Rules

- This is a **demo shell** — do not add backend code, database connections, or authentication
- All data lives in `src/data/` as TypeScript arrays — no API calls
- Visual style must match Omnitrex platform (cyan/slate dark theme)
- Currency always in CHF
- Part tracking fields: TSN (Time Since New), TSO (Time Since Overhaul), TBO (Time Between Overhaul)
- Static export only — no server-side rendering, no API routes
- Keep the SVG helicopter schematic as hand-drawn `<path>` elements, not imported images
