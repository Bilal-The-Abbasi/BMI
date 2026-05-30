# OwnerOS AI — Operations, Reporting & SOP Prompts

---

> **Safety Rule:** Review all AI output before use. No AI-generated content should be used
> without human approval. Do not deploy AI outputs for customer-facing content without review.

---

## Prompt 8: SOP Creation from Verbal Description

**Use case:** Turning a rough verbal description of a process into a structured SOP
**Input needed:** Description of the process, who does it, what tools are involved

```
You are an operations documentation specialist helping create a standard operating procedure (SOP).

Here is a description of a business process:
"[Paste description of the process here — can be rough notes or spoken language]"

Create a formatted SOP using this structure:
1. Title
2. Purpose (why this SOP exists)
3. Trigger (what causes this SOP to start)
4. Owner (role, not name)
5. Tools Needed
6. Steps (numbered, specific enough that a new hire could follow)
7. Quality Checklist (how do you know it was done right)
8. AI Assist Opportunity (if applicable)
9. Escalation Rule (when to involve a manager)

Keep language clear and direct. Write at a level accessible to a new employee.

⚠ REVIEW BEFORE USE: Have a manager review this SOP for accuracy and completeness before publishing.
```

---

## Prompt 9: FAQ Answer Generation

**Use case:** Creating approved FAQ answers from rough notes or verbal descriptions
**Input needed:** The question, rough answer notes, business name, any constraints (e.g., no specific pricing)

```
You are a customer communication specialist for [Business Name].

The following question needs an approved, customer-facing answer:
Question: "[Question]"
Context and key points to include: "[Rough notes on the answer]"

Write an approved FAQ answer that:
- Is accurate, clear, and concise (under 75 words)
- Is written for the customer, not for internal staff
- Does not include specific pricing unless provided
- Does not make any medical, legal, or financial claims
- Matches this tone: [professional/friendly/warm — choose one]

⚠ REVIEW BEFORE PUBLISHING: The business owner or manager must approve all customer-facing FAQ answers before they go live.
```

---

## Prompt 10: Weekly Business Summary (Owner Dashboard Narrative)

**Use case:** Turning dashboard numbers into a readable weekly summary for the business owner
**Input needed:** Last week's key metrics (leads, bookings, tasks, revenue, issues)

```
You are writing a brief weekly operations summary for a small business owner.

Here are last week's metrics:
- Leads received: [X]
- Appointments booked: [X]
- Appointments completed: [X]
- No-shows: [X]
- Follow-ups sent: [X]
- Open tasks at week end: [X]
- Key highlights: [notes]
- Key issues: [notes]

Write a 3–4 paragraph executive summary that:
- Interprets the numbers in plain language
- Notes anything that improved or declined vs. previous week
- Flags any concern that needs attention
- Ends with 2–3 suggested questions or decisions for the owner

Do NOT invent data not provided. Mark any section where data was not provided as "Data not available."

⚠ REVIEW BEFORE SENDING: Confirm all metrics are accurate before sharing this with the owner.
```

---

## Prompt 11: Staff Meeting Notes to Task List

**Use case:** Converting raw meeting notes into clean action items
**Input needed:** Raw meeting notes, attendees, date

```
Meeting date: [Date]
Attendees: [Names]
Raw notes: "[Paste notes here]"

Extract all action items from these meeting notes. For each action item, identify:
1. Task description (what needs to be done)
2. Assigned person (if mentioned, otherwise note "unassigned")
3. Due date (if mentioned, otherwise note "no deadline stated")
4. Priority (High / Medium / Low — based on context)

Format as a clean task list, ready to be entered into a project management tool.

⚠ REVIEW BEFORE USE: Confirm all action items are accurate and properly assigned before entering into your task board.
```

---

## Prompt 12: Negative Review Response

**Use case:** Drafting a professional, empathetic response to a negative online review
**Input needed:** The review text, business name, type of response desired (public or private)

```
You are a customer experience manager for [Business Name].

A customer left this negative review:
"[Paste review text]"

Write a professional, empathetic public response that:
- Acknowledges the customer's experience without admitting fault
- Expresses genuine regret that their experience didn't meet expectations
- Invites offline resolution (provide contact: [email/phone])
- Is under 100 words
- Does NOT: argue with the customer, make excuses, be defensive, or reveal private details

Do NOT confirm or deny specific details from the review.
Do NOT offer refunds, credits, or commitments in the public response.

⚠ REVIEW BEFORE POSTING: The business owner must approve this response before it is published.
```

---

## Prompt 13: Call Notes Summary

**Use case:** Summarizing a call transcript or rough call notes into a clean record
**Input needed:** Call notes or transcript, caller name, call purpose

```
Caller name: [Name]
Call date: [Date]
Call purpose: [Description]
Raw notes or transcript: "[Paste notes]"

Summarize this call in the following format:
1. Call summary (2–3 sentences: who called, what they wanted, what was resolved)
2. Key information shared by the caller
3. Commitments made (any follow-up promised to the caller)
4. Next action required (what needs to happen next, by whom)
5. CRM log note (one sentence for the activity feed)

⚠ REVIEW BEFORE LOGGING: Confirm all details are accurate before saving to CRM.
```

---

## Prompt 14: Proposal / Estimate Follow-Up Email

**Use case:** Following up on a sent proposal or estimate
**Input needed:** Recipient name, proposal/estimate description, date sent, business name

```
Write a follow-up email from [Business Name] to [Name] who received a proposal/estimate for [Description] on [Date].

The email should:
- Reference the specific proposal
- Invite them to ask questions
- Offer a specific next step (call, meeting, reply)
- Be friendly and low-pressure — not sales-heavy
- Be under 100 words

Do NOT include revised pricing or scope changes without authorization.
Do NOT make outcome guarantees.

⚠ REVIEW BEFORE SENDING: Confirm recipient name and proposal details are correct.
```

---

## Prompt 15: Owner Decision Brief

**Use case:** When the owner needs a quick summary to make a business decision
**Input needed:** The decision to be made, relevant context, options available, constraints

```
The business owner needs to make the following decision:
Decision: [What needs to be decided]
Context: [Background information]
Options being considered:
1. [Option A]
2. [Option B]
3. [Option C, if applicable]
Constraints: [Budget, timeline, staff availability, etc.]

Write a brief decision brief (under 200 words) that:
- Summarizes the key tradeoffs
- Identifies the most important consideration
- Recommends a default option with a one-sentence rationale
- Notes any information missing that would change the recommendation

This is a thinking tool, not a final decision. The owner decides.

⚠ REVIEW BEFORE ACTING: This is an AI-generated analysis. Verify all context and consult relevant stakeholders before making the decision.
```
