# OwnerOS AI — Read This First
## Founder Operating Guide

*Start here. This file explains how to use everything in this repo.*

---

## Who This Is For

This repository is the complete operating foundation for OwnerOS AI. It is built for two founders:

- **Founder 1** — Marketing, sales, messaging, AI workflows, client communication
- **Founder 2** — Project management, implementation, delivery operations, QA

Every folder and file in this repo has a specific job. This guide tells you where to go for what.

---

## The 3 Things to Do First

### 1. Deploy the Website
```bash
cd website
npm install
npm run build
```
Then connect the `/website` folder to a new Vercel project. It deploys in under 5 minutes.

> Before going live: update the contact form action URL in `website/src/app/contact/page.tsx`
> with your real Formspree endpoint. Sign up free at formspree.io.

### 2. Have an Attorney Review the Legal Templates
Before using anything with a paying client, have a licensed attorney review:
- `legal-templates/ai-use-policy.md`
- `legal-templates/client-responsibility-policy.md`
- `sales-assets/statement-of-work.md`

These are working templates, not legal advice. Do not skip this step.

### 3. Fill In the Founder Story
Open `brand/founder-story.md` and replace all `[bracketed placeholders]` with your real names,
backgrounds, and a real client observation story. This feeds your About page, LinkedIn, and pitches.

---

## How the Repo Is Organized

```
/owneros-ai
├── readmefirst.md              ← You are here
├── README.md                   ← Business overview and folder index
├── /brand                      ← Everything about how you talk about the business
├── /website                    ← The actual deployable website (Next.js + Tailwind)
├── /sales-assets               ← Scripts, proposals, emails, pricing — use these to sell
├── /audit-system               ← Everything needed to run a $1,500 OwnerOS Audit
├── /delivery-assets            ← Templates for running client projects start to finish
├── /command-center             ← How to build the Notion client portal
├── /sop-library                ← 30 reusable SOPs for client businesses
├── /prompt-library             ← AI prompts organized by use case
├── /automation-recipes         ← 20 automation blueprints (Make/Zapier/GHL)
├── /dashboards                 ← Dashboard templates for owner reporting
├── /demos                      ← 3 complete sales demos (med spa, contractor, dental)
├── /first-client-playbook      ← Step-by-step guide for delivering the first client
├── /internal-ops               ← How OwnerOS AI itself runs (pipeline, roles, QA)
├── /legal-templates            ← AI policy, data access, human review, risk register
├── /case-studies               ← Strategy and templates for getting first 3 case studies
└── /marketing-launch           ← 90-day launch plan, LinkedIn posts, video scripts, blog ideas
```

---

## Founder 1 — Your Priority Files

Start with these. In this order.

| Step | File | Why |
|------|------|-----|
| 1 | `brand/positioning.md` | Understand the full brand foundation before anything else |
| 2 | `brand/messaging.md` | Your pitches, hero copy, FAQ copy — memorize the key phrases |
| 3 | `brand/objection-handling.md` | Study before every sales call |
| 4 | `sales-assets/discovery-call-script.md` | Use on every initial call |
| 5 | `sales-assets/qualification-scorecard.md` | Score every prospect after the call |
| 6 | `audit-system/audit-intake-form.md` | Send to every new client |
| 7 | `audit-system/sample-report-medspa.md` | Show prospects what an Audit delivers |
| 8 | `sales-assets/audit-to-build-upsell.md` | Use after every Audit presentation |
| 9 | `marketing-launch/90-day-plan.md` | Start executing Week 1 tasks immediately |
| 10 | `marketing-launch/video-scripts.md` | Record your first 2–3 LinkedIn videos |

---

## Founder 2 — Your Priority Files

Start with these. In this order.

| Step | File | Why |
|------|------|-----|
| 1 | `first-client-playbook/delivery-plan.md` | The complete 8-week client delivery blueprint |
| 2 | `delivery-assets/client-onboarding-checklist.md` | Run this for every new client |
| 3 | `command-center/notion-setup-guide.md` | Build the client portal before the first kickoff |
| 4 | `command-center/database-schema.md` | The exact Notion database structure to replicate |
| 5 | `delivery-assets/implementation-roadmap.md` | Copy this into ClickUp/Notion for every project |
| 6 | `sop-library/sop-template.md` | Understand the SOP format before building any |
| 7 | `automation-recipes/recipes-01-10.md` | Know what's available before you build for a client |
| 8 | `internal-ops/qa-checklist.md` | Run before every client milestone delivery |
| 9 | `delivery-assets/handoff-document.md` | Prep this in Week 6 of every project |
| 10 | `legal-templates/data-access-checklist.md` | Send with every client contract |

---

## Both Founders — Weekly Operating Rhythm

### Every Monday (30 minutes together)
1. Open `internal-ops/sales-pipeline.md` — review all active stages
2. Check all active projects against `delivery-assets/implementation-roadmap.md`
3. Any decisions needed? Make them now. Log them.
4. Assign this week's priorities per `internal-ops/role-definitions.md`

### Every Friday (15 minutes together)
1. Have all client weekly updates been sent? (`delivery-assets/weekly-update-template.md`)
2. Any active project at risk of going off-track?
3. Any new leads in the pipeline that need follow-up?

### Monthly (1–2 hours together)
- Quarterly: full review using `internal-ops/sales-pipeline.md` pipeline report

---

## Running Your First Sales Call

1. **Prep:** Review the prospect's business online. Note their industry and likely pain points.
2. **Call:** Follow `sales-assets/discovery-call-script.md` — listen more than you talk.
3. **Score:** Complete `sales-assets/qualification-scorecard.md` within 1 hour of the call.
4. **Follow up:** Send the same-day follow-up using `sales-assets/follow-up-email-templates.md` (Template 1).
5. **Propose:** If score ≥ 12/20, send the Audit proposal using `sales-assets/proposal-template.md`.
6. **Present:** Book a 30-minute call to walk through the proposal. Never just email and wait.

---

## Running Your First Audit

1. Client pays $1,500. Send `audit-system/audit-intake-form.md` (host in Typeform or Google Forms).
2. Review intake form before the call.
3. Run the 60-minute discovery session using `audit-system/client-interview-questions.md`.
4. Score using `audit-system/scoring-rubric.md`.
5. Write the report using `audit-system/report-template.md` (reference `audit-system/sample-report-medspa.md` for tone and structure).
6. Send report 24 hours before the presentation call.
7. Present findings + upsell using `sales-assets/audit-to-build-upsell.md`.

---

## Running Your First Client Project

Follow `first-client-playbook/delivery-plan.md` exactly.

Key gates — do not skip these:
- **Gate 1 (Week 1 end):** Client approves the build plan in writing before you build anything.
- **Gate 2 (Automation go-live):** Human Review Checklist completed for all customer-facing content.
- **Gate 3 (Training):** Team can demonstrate using the system before handoff is declared.

---

## Using the SOP Library with Clients

The 30 SOPs in `/sop-library/` are templates. Before giving one to a client:
1. Open the SOP and replace all generic references with the client's specific tools, team names, and process details.
2. Have the client owner review and approve it.
3. Mark it Active in Notion only after owner approval.

Never give a client a generic SOP with placeholder text still in it.

---

## Using the Prompt Library with Clients

Every prompt in `/prompt-library/` includes a mandatory safety footer:

> *Review every AI output before use. Do not send any AI-generated content that includes specific prices, guaranteed outcomes, medical, legal, or financial claims, or commitments not authorized.*

Reinforce this with clients during training. Build it into the SOP for AI Response Review (`R5-02`).

---

## Using the Automation Recipes

The 20 recipes in `/automation-recipes/` are blueprints — not ready-to-run files. To use one:
1. Read the full recipe including the testing checklist and failure handling.
2. Build it in Make or GHL for the client's specific account.
3. Test end-to-end with real data before going live.
4. Document the live version in the client's Command Center (Automation Recipes database).

---

## How to Update This Repo

**When you build a new SOP for a client that could be reused:**
Copy it (anonymized) into `/sop-library/` with a version number.

**When you write a new prompt that works well:**
Add it to the appropriate file in `/prompt-library/`.

**When a process in OwnerOS AI changes:**
Update the relevant file. Add a version note at the top.

**When a client project is complete:**
Add the anonymized case study to `/case-studies/` using the template.

---

## Things Not to Build Yet

Until you have 3 completed client projects:

| Don't Build Yet | Why |
|----------------|-----|
| Custom web app for client portals | Notion works fine and is faster |
| Enterprise proposals ($25K+) | De-risk delivery before expanding scope |
| Paid advertising | Get first clients through network and outreach |
| Podcast or YouTube channel | Content before distribution |
| Hiring | Systematize delivery first |
| Full Buildout offer ($25K–$50K) | Learn the delivery model on smaller projects first |

---

## Emergency Reference

| Situation | File to Open |
|-----------|-------------|
| Sales call in 10 minutes | `sales-assets/discovery-call-script.md` |
| Client asks about a deliverable we can't find | `delivery-assets/handoff-document.md` |
| Client pushes back on price | `brand/objection-handling.md` — Objection 2 |
| Automation isn't working | `legal-templates/risk-register.md` — Bottleneck section |
| Client asks to add scope | `delivery-assets/implementation-roadmap.md` — Change Request section |
| AI content needs review | `legal-templates/human-review-checklist.md` |
| Something major goes wrong | Both founders discuss. Then document it. Then fix the system that allowed it. |

---

*OwnerOS AI — Built to run on systems, not memory.*
*Last updated: 2026-05-30*
