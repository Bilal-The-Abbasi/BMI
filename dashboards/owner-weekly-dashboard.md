# OwnerOS AI — Owner Weekly Dashboard Template

**Purpose:** Give the business owner a 5-minute Monday morning view of business health.
**Update frequency:** Weekly (auto-generated Friday EOD, reviewed Monday AM)
**Data sources:** CRM, scheduling tool, task board, weekly summary form (staff-filled)
**Platform:** Looker Studio (Google) connected to Google Sheets + CRM data | OR | Notion manual entry

---

## Dashboard Sections

### Section 1: Lead Health

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| New leads received | | | ↑↓— |
| Lead sources breakdown | Web / Phone / Social / Referral | | |
| Average response time | | | |
| Leads still open (no booking) | | | |
| Leads in active follow-up | | | |

**Owner decision question:** "Are we responding fast enough? Which source is sending the most leads?"

---

### Section 2: Booking Health

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Appointments booked | | | |
| Lead-to-booking rate | % | % | |
| No-shows | | | |
| No-show rate | % | % | |
| Appointments completed | | | |

**Owner decision question:** "Is our no-show rate acceptable? Are we booking at the rate we expect?"

---

### Section 3: Follow-Up Performance

| Metric | Status |
|--------|--------|
| Active follow-up sequences running | |
| Sequences completed this week | |
| Quotes/estimates outstanding (>7 days) | |
| Leads at reactivation stage | |

**Owner decision question:** "Are there leads that need personal outreach this week?"

---

### Section 4: Tasks and Operations

| Metric | Status |
|--------|--------|
| Total tasks completed this week | |
| Tasks overdue (as of Monday) | |
| High-priority open tasks | |
| Owner approval queue (items waiting for you) | |
| Complaints or issues from last week | |

**Owner decision question:** "What's blocked? What needs my decision today?"

---

### Section 5: Weekly AI Summary

*Auto-generated Friday at 4:30 PM using the Weekly Summary Prompt.*

Example:
> "This week, Glow Med Spa received 34 new leads — up 21% from last week. The strongest channel was the website (41%), with referrals at an all-time high of 4. Lead-to-booking rate improved to 56%, likely due to the new follow-up sequence running since Monday. Three leads at Day 10 have not responded and may benefit from a personal call. One complaint was logged on Wednesday — it was escalated and resolved the same day."

---

## Looker Studio Build Notes

**Data sources to connect:**
1. Google Sheets "Lead Tracker" (updated by Make automation from CRM)
2. Google Sheets "Appointment Log" (updated from scheduling tool)
3. Google Sheets "Task Log" (updated weekly from ClickUp export or Make)
4. Google Sheets "Weekly Summary" (manual entry by front desk)

**Charts to build:**
- Lead volume by week (line chart, 8-week trend)
- Lead source breakdown (pie chart, this week)
- Booking rate trend (line chart)
- No-show rate trend (line chart)
- Open tasks by priority (bar chart)

**Share:** Dashboard link in Notion Command Center → Room 5: Control Room

---

## AI Summary Prompt (for weekly narrative)

See: `/prompt-library/operations-and-reporting-prompts.md` — Prompt 10
