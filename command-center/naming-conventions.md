# OwnerOS AI — Naming Conventions

Consistent naming prevents confusion across clients, tools, and team members.
Follow these conventions for all client work.

---

## Client Folder Naming

**Pattern:** `[ClientShortName]-[ProjectCode]-[Year]`

Examples:
- `glow-audit-2024`
- `coastal-growth-2024`
- `apex-law-quickstart-2024`

---

## File Naming

**Pattern:** `[document-type]_[client-short]_[version]_[date]`

Examples:
- `audit-report_glow-medspa_v1_2024-11-15.pdf`
- `sow_coastal-roofing_v2_2024-11-20.pdf`
- `handoff-doc_apex-law_v1_2024-12-01.pdf`

Rules:
- Use lowercase with hyphens (no spaces, no underscores except for major field separators)
- Version: v1, v2, v1-draft, v2-final
- Dates: YYYY-MM-DD format
- Never use "final_final" or "FINAL2" — use version numbers

---

## SOP Naming

**Pattern:** `[Room#]-[SOP#]: [Action] — [Context]`

Examples:
- `R1-01: New Lead Received — Web Form`
- `R2-04: Quote Follow-Up — 3-Day Reminder`
- `R3-12: Staff FAQ Response — Service Pricing`
- `R4-01: Weekly Team Meeting — Agenda and Notes`
- `R5-01: Owner Dashboard Review — Monday Morning`

---

## Notion Page Naming

Room pages: `🚪 Room 1: The Front Door`
SOP entries: `R1-01: New Lead Received — Web Form`
Task entries: Use action verbs: "Update FAQ #4", "Send weekly report to [Client]"
Meeting notes: `[Date] — [Type]: [Topic]` e.g., `2024-11-15 — Client: Kickoff Call — Glow Med Spa`

---

## Automation Recipe Naming

**Pattern:** `[Trigger] → [Action] ([Tool])`

Examples:
- `Web Form Submit → CRM Entry + Email (Make + GHL)`
- `Missed Call → SMS Response (GHL)`
- `New Lead → AI Summary (Make + OpenAI)`
- `Quote Sent → 3-Day Follow-Up (GHL)`

---

## Email Subject Lines (Client Deliverables)

Pattern: `[Business Name] — [Document Type]`

Examples:
- `Glow Med Spa — OwnerOS Audit Report`
- `Coastal Roofing — Week 3 Project Update`
- `Apex Law — Final Handoff Document`

---

## Project Stages (CRM)

1. `Lead — Contacted`
2. `Lead — Discovery Call Scheduled`
3. `Lead — Discovery Call Completed`
4. `Lead — Proposal Sent`
5. `Client — Audit In Progress`
6. `Client — Implementation In Progress`
7. `Client — Training`
8. `Client — Handoff`
9. `Client — Retainer Active`
10. `Client — Closed (Won)`
11. `Client — Closed (Lost)`
12. `Client — Nurture (No Buy)`

---

## Internal Slack / Messaging Channels (if used)

- `#[client-short]-project` — all client communication
- `#[client-short]-assets` — files and deliverables
- `#internal-ops` — OwnerOS AI team
- `#sales` — prospects and proposals
- `#qa-review` — anything that needs a second set of eyes
