# OwnerOS AI — Command Center Database Schema

Reference for all Notion databases used in the OwnerOS Command Center.

---

## Database 1: SOP Library

**Purpose:** Central repository for all business processes.

| Property | Type | Values / Notes |
|----------|------|----------------|
| SOP Title | Title | Descriptive name, e.g., "New Lead Received — Front Desk Process" |
| Room | Select | Room 1 · Room 2 · Room 3 · Room 4 · Room 5 · General |
| Owner | Person | Team member responsible for maintaining this SOP |
| Trigger | Text | What event causes this SOP to be executed |
| Status | Select | Active · Draft · Needs Review · Archived |
| Last Updated | Date | Date of last content change |
| Version | Text | v1.0, v1.1, v2.0, etc. |
| Tools Needed | Multi-select | CRM, Notion, ClickUp, GHL, etc. |
| AI Assist | Checkbox | True if an AI prompt is associated with this SOP |
| Tags | Multi-select | Lead, Follow-up, Client, Staff, Admin, Compliance, etc. |
| Related Templates | Relation | Link to Template Library |

**Views:**
- All SOPs (default table)
- Kanban by Room
- Needs Review (filtered)
- Recently Updated (sorted by date, desc)

---

## Database 2: FAQ Knowledge Base

**Purpose:** Approved answers to common customer and staff questions.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Question | Title | The question exactly as it's typically asked |
| Approved Answer | Text | The full approved response |
| Category | Select | Customer · Staff · Pricing · Booking · Complaints · Services |
| Audience | Select | Customer-facing · Internal (staff only) |
| Status | Select | Active · Needs Review · Archived |
| Owner | Person | Who owns maintaining this answer |
| Last Updated | Date | |
| Notes | Text | Context, edge cases, or escalation rules |

---

## Database 3: AI Prompt Library

**Purpose:** Reusable AI prompts for staff and OwnerOS AI team use.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Prompt Name | Title | Short descriptive name |
| Category | Select | Lead Response · Follow-up · SOP Creation · Report · Customer Support · Content · Other |
| Use Case | Text | When and why to use this prompt |
| Input Needed | Text | What information to provide to the AI |
| Prompt Text | Text | The full prompt (include ⚠ review reminder at end) |
| Expected Output | Text | What the AI should produce |
| Review Note | Text | What humans should check before using the output |
| Status | Select | Active · Draft · Deprecated |
| Tags | Multi-select | |

---

## Database 4: Task Board

**Purpose:** Manage team tasks, deadlines, and accountability.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Task Name | Title | Action-oriented: "Send invoice to [Client]", "Update FAQ #4" |
| Owner | Person | Who is responsible for completing this task |
| Status | Select | Not Started · In Progress · Blocked · Done · Recurring |
| Priority | Select | High · Medium · Low |
| Due Date | Date | |
| Room | Select | Room 1–5 · Admin · Marketing · General |
| Recurring | Select | Daily · Weekly · Monthly · None |
| Notes | Text | Any context or dependencies |
| Linked SOP | Relation | SOP to follow for this task type |

**Views:**
- My Tasks (filtered by current user, not done)
- This Week (filtered by due date)
- By Room (grouped)
- Overdue (filtered: due date < today, status ≠ done)
- Recurring Tasks (filtered: recurring ≠ none)

---

## Database 5: Weekly Summary Log

**Purpose:** Weekly business health snapshot for owner review.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Week Of | Title / Date | Week starting date |
| Lead Count | Number | Total leads received this week |
| Appointments Booked | Number | |
| Appointments Completed | Number | |
| No-Shows | Number | |
| Follow-Ups Sent | Number | |
| Quotes/Estimates Sent | Number | |
| New Customers | Number | |
| Open Tasks (EOW) | Number | |
| Highlights | Text | What went well |
| Issues | Text | What didn't go well or needs attention |
| Owner Action Items | Text | What the owner needs to do |
| Completed By | Person | Who filled it out |

---

## Database 6: Meeting Notes

**Purpose:** Log all internal and client meetings.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Meeting Title | Title | |
| Date | Date | |
| Attendees | Person | |
| Type | Select | Internal · Client · Training · Review |
| Summary | Text | Key discussion points |
| Decisions | Text | What was decided |
| Action Items | Text | Who does what by when |
| Recording | URL | Link if recorded |

---

## Database 7: Automation Recipes (Internal Reference)

**Purpose:** Track which automations are live, their status, and documentation.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Recipe Name | Title | |
| Room | Select | Room 1–5 |
| Tool | Multi-select | Make · Zapier · GHL · etc. |
| Status | Select | Live · Testing · Draft · Paused · Broken |
| Trigger | Text | What starts this automation |
| Action Summary | Text | What it does |
| Last Tested | Date | |
| Documentation | URL | Link to detailed recipe doc |
| Error Handling | Text | What happens if it fails |
