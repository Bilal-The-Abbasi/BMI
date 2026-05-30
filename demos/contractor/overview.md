# Demo: Contractor Estimate Follow-Up System

**Business:** Coastal Builders (fictional demo business)
**Location:** [City], [State]
**Size:** 8 employees + 4 subcontractors
**Services:** Kitchen remodels, bathroom renovations, decks, additions
**Revenue:** ~$2.4M/year

---

## The Before Scenario

**The problem:**
- Owner was generating 15–20 estimates per month
- Estimates were sent via email with no follow-up process
- "We send the quote and wait" — standard approach
- Owner personally called a few leads who seemed interested, but inconsistently
- No tracking of what happened after a quote was sent
- Average time to follow-up after estimate: 5–7 days (if at all)
- Win rate on estimates: approximately 28%

---

## The After Scenario

**What OwnerOS AI built:**

### Estimate Pipeline in CRM
Every estimate now has a stage:
1. Estimate Requested
2. Site Visit Scheduled
3. Estimate Prepared
4. Estimate Sent
5. Follow-Up Sent (Day 3)
6. Follow-Up Sent (Day 7)
7. Won / Lost / Postponed

### Follow-Up Sequence (Estimate)

| Step | Timing | Channel | Message |
|------|--------|---------|---------|
| 1 | Day 0 | Email | Estimate delivery with cover email |
| 2 | Day 3 | SMS | "Hi [Name], just checking in on the estimate I sent…" |
| 3 | Day 7 | Email | "A few questions we commonly get about [project type]…" |
| 4 | Day 14 | SMS | "Still thinking it through? Happy to answer any questions." |
| 5 | Day 21 | Task | Staff: "Manual call — Estimate [#] — 3 weeks no response" |

---

## Lead/Customer Example

**Lead:** Jim and Lisa Thompson
**Project:** Kitchen remodel — open concept + new appliances
**Estimate value:** $48,500
**Status at Day 0:** Estimate sent

**What happened before:**
- Estimate sent. No response. Owner assumed they went with someone else.
- No follow-up sent.

**What happens now:**
- Day 3: Automatic SMS:
  > "Hi Jim, this is Derek from Coastal Builders. Just checking in on the estimate I sent on Monday — do you have any questions? Happy to walk through it on a quick call."
- Jim replies: "We're still comparing bids. Can you explain the permit timeline?"
- Response from Derek within the hour using the Permit FAQ Template
- Day 7 email sent with a "What to ask every contractor you're comparing" guide
- Jim booked a follow-up call Day 9 — project awarded Day 12

**Without the system:** This lead would have been assumed lost on Day 3. The project was won.

---

## SOP Example: Site Visit → Estimate Prep

**Trigger:** Site visit completed

**Steps:**
1. Complete site visit notes form (mobile Google Form) within 1 hour of leaving
2. Log visit summary in CRM contact record
3. Create task: "Prepare estimate — [Client] — due [3 business days]"
4. Prepare estimate using the Estimate Template
5. Owner reviews and approves all estimates before sending
6. Send estimate with cover email (personalized using Estimate Cover Email Prompt)
7. Move CRM stage to "Estimate Sent"
8. Follow-up sequence auto-starts from here

---

## Owner Weekly Summary (Sample)

**Coastal Builders — Week of [Date]**

**Estimate Pipeline:**
- New estimate requests: 5
- Site visits completed: 4
- Estimates sent: 6
- Estimates in follow-up: 14 (across all stages)

**Pipeline Health:**
- Estimates > 21 days with no response: 3 → Manual call tasks created
- Won this week: 2 ($67,000 total)
- Lost this week: 1 (went with lower bid)
- Total pipeline value: $412,000

**Owner actions:**
1. 3 old estimates need manual calls — scheduled in task board
2. One customer replied asking about timeline — needs your personal response
3. Follow-up rate: 100% of estimates received at least 1 follow-up (improvement from 40% last month)

---

*This demo uses fictional data. No guaranteed outcomes.*
