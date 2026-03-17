# HelixTrack — Pitch for Jasper

## The Opportunity

Aviation MRO (Maintenance, Repair & Overhaul) software for helicopter operators is a niche but high-value market. Current incumbents — CAMP Systems, Rusada (ENVISION), Traxxall — charge **$200-500 per aircraft per month** with interfaces that look like they were designed in 2005. The market is underserved for small-to-medium operators (2-20 aircraft) who don't need full airline-grade ERP but need more than Excel.

The Swiss helicopter market alone includes operators like Air Zermatt, Rega, Swiss Helicopter, Heli Bernina, and dozens of private operators. EASA Part-M requires detailed parts tracking, maintenance records, and airworthiness documentation — these operators **must** use software for compliance.

## What We Built

Live demo: **helicopter.omnitrex.eu**

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

5. **Omnitrex platform** — If the client is already using or considering Omnitrex for GRC/compliance, HelixTrack becomes a natural extension. One vendor, one login, one design system.

## The Switzerland Angle

- **Neutral jurisdiction** — Attractive for operators who work across borders (EASA member states)
- **Strong aviation sector** — Pilatus, RUAG, Kopter (Leonardo), Marenco → ecosystem credibility
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
| Demo | Done | helicopter.omnitrex.eu |
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
