# Helitrex — Pitch for Jasper

## The Opportunity

Aviation MRO (Maintenance, Repair & Overhaul) software for helicopter operators is a niche but high-value market. Current incumbents — CAMP Systems, Rusada (ENVISION), Traxxall — charge **$200-500 per aircraft per month** with interfaces that look like they were designed in 2005. The market is underserved for small-to-medium operators (2-20 aircraft) who don't need full airline-grade ERP but need more than Excel.

The Swiss helicopter market alone includes operators like Air Zermatt, Rega, Swiss Helicopter, Heli Bernina, and dozens of private operators. EASA Part-M requires detailed parts tracking, maintenance records, and airworthiness documentation — these operators **must** use software for compliance.

## What We Built

Live demo: **helitrex.omnitrex.eu**

A fully interactive frontend demo showing:
- **Parts inventory** — 54 realistic helicopter parts with full lifecycle tracking (TSN/TSO/TBO), searchable and sortable
- **Helicopter view** — Interactive SVG schematic with clickable system zones, color-coded by component health
- **Operations dashboard** — Incoming orders, replacement scheduling, maintenance audit trail

All mock data, no backend — but the visual quality and interaction design demonstrate what a production product would look and feel like.

## Competitive Edge

1. **Modern UX** — The competition looks dated. Our Omnitrex design system (dark theme, responsive, fast) is immediately differentiating in demos.

2. **Swiss-based** — Data sovereignty matters in aviation. Swiss hosting, Swiss company, Swiss jurisdiction. Operators dealing with FOCA (Federal Office of Civil Aviation) and EASA appreciate a local vendor.

3. **EASA proximity** — Switzerland applies EASA regulations. We understand the regulatory environment firsthand.

4. **Custom-built** — Not a white-label or fork. Purpose-built for the use case, which means we can adapt to specific operator workflows rather than forcing a generic ERP.

5. **Omnitrex platform** — If the client is already using or considering Omnitrex for GRC/compliance, Helitrex becomes a natural extension. One vendor, one login, one design system.

## Technical Strategy

### Architecture

Helitrex is built on the same proven stack as Omnitrex GRC:

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Next.js 15 + React 19 + TypeScript | Static export for demo, SSR for production |
| Backend | Supabase (PostgreSQL) | Managed database with built-in auth, storage, and real-time |
| Hosting | Vercel + Supabase EU region | Swiss/EU data residency guaranteed |
| Styling | Tailwind CSS 3 | Shared Omnitrex design system (cyan/slate dark theme) |

### EASA Part-M Data Model

The production database will model the full helicopter maintenance lifecycle:

- **Parts lifecycle** — TSN (Time Since New), TSO (Time Since Overhaul), TBO (Time Between Overhaul) tracking with automated alerts at threshold percentages
- **Document management** — ARC (Airworthiness Review Certificate), CRS (Certificate of Release to Service), work orders, and task cards
- **AD/SB tracking** — Airworthiness Directives and Service Bulletins linked to affected aircraft and parts, with compliance status tracking
- **Maintenance programs** — Operator-specific maintenance schedules per aircraft type, aligned with manufacturer recommendations and EASA requirements

### Multi-Tenant Architecture

- Row-Level Security (RLS) in PostgreSQL — each operator sees only their own data
- Shared infrastructure keeps costs low; logical isolation keeps data secure
- Single codebase serves all customers with operator-specific configuration

### Integrations (Roadmap)

- Export to CAMO (Continuing Airworthiness Management Organisation) systems
- Potential EASA reporting APIs as they become available
- CSV/PDF export for regulatory submissions and audits
- REST API for Enterprise tier customers to integrate with existing tools

### Security

- TLS 1.3 in transit, AES-256 encryption at rest
- Full audit trail on every data mutation (who changed what, when, and why)
- Role-based access control (maintenance engineer, quality manager, accountable manager)
- Automated backups with point-in-time recovery

## Legal Strategy

### Data Protection & Privacy

- **Swiss FADP compliance** — The Swiss Federal Act on Data Protection (nFADP, effective Sept 2023) is equivalent to GDPR. Helitrex is designed to meet both frameworks.
- **Data residency** — EU-only hosting via Vercel (Frankfurt) and Supabase EU region. Contractual guarantees that aviation records never leave EU/EEA jurisdiction.
- **Data Processing Agreement (DPA)** — Standard DPA provided to all customers, covering aviation maintenance records as the data subject matter.

### Aviation Regulatory Position

- **EASA Part-M** — Helitrex operates as a maintenance record management system. It is **not** avionics software and does **not** require DO-178C certification.
- **Competent authority acceptance** — The operator's CAMO must demonstrate to their NAA (e.g., FOCA in Switzerland) that their record-keeping system is adequate. Helitrex provides the audit trail, data integrity, and export capabilities to support this acceptance process.
- **Liability** — Software disclaimers clarify that the operator remains solely responsible for airworthiness decisions. Helitrex is a tool for managing records and tracking maintenance, not a decision-making system.

### Intellectual Property & Licensing

- **Proprietary platform** — All source code is owned by Silente Labs GmbH
- **BUSL-1.1 licensing** — Business Source License, consistent with the Omnitrex product family. Prevents competitors from self-hosting while allowing full SaaS access.
- **Contract structure** — SaaS subscription with SLA (99.5% uptime for Professional, 99.9% for Enterprise), annual or monthly billing

## The Switzerland Angle

- **Neutral jurisdiction** — Attractive for operators who work across borders (EASA member states)
- **Strong aviation sector** — Pilatus, RUAG, Kopter (Leonardo), Marenco — ecosystem credibility
- **FOCA regulatory environment** — Swiss-specific compliance knowledge is a selling point
- **Swiss quality perception** — Premium positioning aligns with premium pricing
- **Data protection** — Swiss FADP (Federal Act on Data Protection) is GDPR-equivalent, reassuring for operators handling aircraft records

## Revenue Model

**SaaS per-aircraft/month:**

| Tier | Price/aircraft/month | Includes |
|------|---------------------|----------|
| Basic | CHF 150 | Parts tracking, maintenance scheduling, basic reporting |
| Professional | CHF 220 | + Document management, compliance dashboards, multi-location |
| Enterprise | CHF 300 | + API access, custom integrations, dedicated support, SLA |

**Example deal sizes:**
- Small operator (4 helicopters, Professional): CHF 880/month = CHF 10,560/year
- Medium operator (12 helicopters, Professional): CHF 2,640/month = CHF 31,680/year
- Large operator (20+ helicopters, Enterprise): CHF 6,000+/month = CHF 72,000+/year

## Risks

1. **Aviation certification complexity** — EASA Part-M compliance is not trivial. The software needs to handle Airworthiness Review Certificates (ARC), Certificate of Release to Service (CRS), Minimum Equipment Lists (MEL), and AD/SB tracking. Getting this wrong has legal liability implications.

2. **Domain expertise gap** — We're software engineers, not aviation maintenance engineers. We'd need either a domain consultant or a deeply engaged pilot customer to validate the data model and workflows.

3. **Long B2B sales cycles** — Aviation operators are conservative. Switching MRO software is a 6-12 month decision involving maintenance managers, quality managers, and sometimes the FOCA/NAA. Budget for relationship-building time.

4. **Regulatory burden** — If the software is used as the operator's official maintenance record system, it may need to be accepted by the competent authority. This isn't formal software certification (like DO-178C for avionics), but operators need confidence in data integrity.

5. **Small addressable market** — Switzerland has ~100 commercial helicopter operators. Even capturing 20% at Professional tier averages ~CHF 250K/year. Growth requires expanding to EASA-wide (EU + EFTA) or adding fixed-wing.

6. **Incumbent lock-in** — CAMP Systems has ~80% market share in the US. European market is more fragmented, which is an opportunity, but operators already on Traxxall/Rusada have migration costs.

## Timeline

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Demo | Done | helitrex.omnitrex.eu |
| Client meeting | 1-2 weeks | Requirements validation, interest confirmation |
| Requirements | 6-8 weeks | Full spec covering Part-M compliance, data model, workflows |
| MVP | 10-12 weeks | Working product with real data for 1 operator |
| Pilot | 3 months | Live usage with pilot customer, iterate on feedback |
| Launch | After pilot | General availability, marketing, pricing finalized |

## Recommendation

**Low-risk to explore.** The demo is built and costs nothing to show. The next step is a client meeting to gauge genuine interest and willingness to invest time in requirements gathering.

Key questions for the meeting:
- What software do they currently use? (Identifies switching costs)
- What's their fleet size and composition? (Validates our demo data realism)
- Who manages their Part-M compliance? (Identifies the decision-maker)
- What's their biggest operational pain point? (Guides MVP scope)
- Would they participate in a pilot program? (Tests commitment)

If the meeting goes well and there's real interest, the investment to reach MVP is roughly 3 months of development time. If it doesn't, we've lost nothing — the demo serves as a portfolio piece for future aviation prospects.
