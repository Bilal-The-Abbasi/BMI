# OwnerOS AI — Automation Recipes 01–10

Each recipe is tool-agnostic but notes the recommended tools for V1 implementation.

---

> **Safety rule for all automations:**
> Any automation that sends a customer-facing message must include a human review step
> or use pre-approved templates. Never automate messages that make guarantees, prices,
> medical claims, or commitments without explicit owner approval.

---

## Recipe 01: Website Form → CRM + Instant Email Response

**Business problem:** Leads submit a form and wait hours for a response.
**Time to value:** Immediate (< 5 min response)

**Trigger:** New form submission on website contact form

**Actions:**
1. Create new contact record in CRM with all form fields
2. Assign lead source tag: "Website — Contact Form"
3. Assign to default owner/queue
4. Send automated email response using approved Initial Response Template
5. (Optional) Send internal Slack/email notification to front desk staff

**Tools:** Typeform or Jotform + Make + GoHighLevel (or HubSpot)

**Setup steps:**
1. Connect form tool to Make via webhook or native integration
2. Set up Make scenario: Form Submit → CRM → Email
3. Configure email template in CRM (use approved copy from Playbook)
4. Test with a live form submission

**Testing checklist:**
- [ ] Submit a test form — confirm CRM record created
- [ ] Confirm email received within 60 seconds
- [ ] Confirm all form fields mapped correctly to CRM
- [ ] Confirm lead source tag applied

**Failure handling:** If CRM webhook fails, Make sends error notification to operations email. Daily review of Make error log.

**Human review:** Email template must be pre-approved before automation goes live. Review monthly for accuracy.

**Privacy note:** Form data should only be stored in tools with appropriate data agreements. Do not include PHI in automations without a BAA in place.

---

## Recipe 02: Missed Call → SMS Response + CRM Task

**Business problem:** Missed calls go unreturned; leads go cold.
**Time to value:** < 2 min response

**Trigger:** Inbound call goes to voicemail or is not answered within 4 rings

**Actions:**
1. Send automated SMS to caller using the Missed Call Text-Back Template
2. Create task in task board: "Return call — [Caller number] — [Date/Time]"
3. Create CRM lead record (if new number) with status "Missed Call — Awaiting Response"

**Tools:** GoHighLevel (built-in missed call text-back), or Twilio + Make + ClickUp

**Setup steps:**
1. Enable "Missed Call Text-Back" in GHL settings
2. Customize the message using the approved template
3. Set up CRM automation to create lead if number is new
4. Set up task creation in ClickUp via GHL webhook or Make

**Testing checklist:**
- [ ] Call the business number from a test phone, don't answer
- [ ] Confirm SMS received within 2 minutes
- [ ] Confirm CRM record created
- [ ] Confirm task created in task board

**Failure handling:** Monitor GHL automation log weekly. Alert if SMS delivery rate drops below 95%.

**Human review:** SMS template approved before go-live. Review monthly.

**Privacy note:** Do not send automated texts to numbers on the Do Not Call registry. GHL manages this if opt-out is enabled.

---

## Recipe 03: New Lead → AI-Generated Summary for Staff

**Business problem:** Staff spend time reading long intake forms; key info gets missed.
**Time to value:** Immediate

**Trigger:** New lead created in CRM from any source

**Actions:**
1. Pull lead record data (name, inquiry, source, notes)
2. Send to AI (OpenAI/Claude API) with the Lead Summary Prompt
3. AI generates a 3–5 sentence summary: who they are, what they want, how they came in
4. Summary is added to the CRM lead record as an internal note
5. (Optional) Send summary to internal Slack channel #new-leads

**Tools:** GHL or HubSpot + Make + OpenAI API

**Setup steps:**
1. Set up Make scenario triggered by new CRM contact
2. Configure OpenAI API call with Lead Summary Prompt
3. Map AI response back to CRM internal notes field
4. Test with a sample lead

**Testing checklist:**
- [ ] New test lead created in CRM
- [ ] AI summary generated within 60 seconds
- [ ] Summary appears in CRM notes
- [ ] Summary is accurate to the lead data provided

**Failure handling:** If AI call fails, the lead is still created — just without the summary note. Log failures in Make.

**Human review:** Staff must not treat the AI summary as fully accurate without checking source fields. It is a shortcut, not a replacement for reading the record.

**Privacy note:** Do not send customer PHI to OpenAI without appropriate data processing agreements. Use first names and inquiry types only — not health conditions or financial details.

---

## Recipe 04: Lead Source → Dashboard Tracker

**Business problem:** Owner doesn't know which marketing channels are producing leads.
**Time to value:** Ongoing visibility

**Trigger:** New CRM contact created (daily batch or real-time)

**Actions:**
1. Extract lead source field from CRM
2. Append to a Google Sheet: Date | Lead Name | Source | Status
3. Google Sheet feeds Looker Studio dashboard automatically

**Tools:** GHL or HubSpot + Make + Google Sheets + Looker Studio (free)

**Setup steps:**
1. Ensure all CRM contacts have a Lead Source field (required, not optional)
2. Set up Make scenario to append new contacts to Google Sheet daily (or real-time)
3. Create Looker Studio dashboard with Lead Source chart (bar or pie)
4. Embed dashboard link in Notion Command Center (Control Room)

**Testing checklist:**
- [ ] Multiple test leads created with different sources
- [ ] All sources appear correctly in Google Sheet
- [ ] Dashboard updated and shows correct breakdown

**Human review:** Owner reviews dashboard every Monday as part of Dashboard Review SOP.

---

## Recipe 05: Quote Sent → 3-Day Follow-Up Reminder

**Business problem:** Quotes go out and no one follows up.

**Trigger:** Quote or estimate is marked "Sent" in CRM

**Actions:**
1. Day 0: Quote status set to "Sent" — timer starts
2. Day 3: If status is still "Sent" (not Won/Lost/Responded) — send follow-up email/SMS using Quote Follow-Up Template
3. Day 7: Second follow-up if still no response
4. Day 14: Task created for staff member: "Manual outreach — [Customer name] — quote unresponded"

**Tools:** GHL pipeline automation, or Make + CRM + Email

**Setup steps:**
1. Create CRM pipeline stage: "Quote Sent"
2. Set up delay-based automation: Stage = Quote Sent → 3 days → send follow-up
3. Build 3-step sequence (Day 3, Day 7, Day 14 task)

**Testing checklist:**
- [ ] Move test contact to "Quote Sent" stage
- [ ] Confirm Day 3 message sends correctly
- [ ] Confirm Day 14 task created

**Human review:** Messages are pre-approved templates. Monthly review for accuracy.

---

## Recipe 06: Appointment Booked → Reminder Sequence

**Business problem:** Customers no-show because they forgot or weren't reminded properly.

**Trigger:** New appointment created in scheduling software

**Actions:**
1. Immediately: send booking confirmation (service, date, time, location, any prep notes)
2. 48 hours before: send reminder email
3. 24 hours before: send reminder SMS
4. 2 hours before: send final SMS reminder
5. After appointment: trigger Recipe 10 (Service Completion Follow-Up)

**Tools:** Calendly or Acuity + GHL + Make (for cross-tool connection if needed)

**Testing checklist:**
- [ ] Book test appointment
- [ ] Confirm booking confirmation received
- [ ] Wait for 48-hour and 24-hour triggers to verify (or use test mode)
- [ ] Confirm all messages include correct details

**Human review:** All reminder templates approved before go-live. Update if service details change.

**Privacy note:** Reminder messages should not include detailed health or service information that could be visible to others if phone is unlocked.

---

## Recipe 07: Completed Service → Review Request (48 Hours)

**Business problem:** Happy customers never leave reviews because no one asks at the right moment.

**Trigger:** Appointment or project marked "Completed" in CRM or scheduling tool

**Actions:**
1. Wait 48 hours (allows customer time to experience results)
2. Send review request SMS using the personalized Review Request Prompt output
3. If no click/response after 48 more hours: send review request email
4. If review is left: notify staff member for a thank-you response

**Tools:** GHL or Make + Email + SMS + Google Review link

**Testing checklist:**
- [ ] Mark test appointment as completed
- [ ] Confirm review request sent 48 hours later
- [ ] Confirm review link works
- [ ] Confirm email follow-up sends if no click

**Human review:** Review request message approved before go-live. Do not send to any customer who expressed dissatisfaction (build a suppression rule).

---

## Recipe 08: Customer Complaint → Manager Alert

**Business problem:** Complaints get buried in inboxes and no one escalates them.

**Trigger:** Incoming email or form submission tagged as "Complaint" OR CRM contact tagged "Unhappy Customer"

**Actions:**
1. Send immediate acknowledgment to customer (pre-approved template)
2. Send internal alert to manager and owner: "⚠ Complaint received — [Customer] — [Date] — [Summary]"
3. Create high-priority task: "Complaint follow-up — resolve within 24 hours"
4. Log in CRM with status "Complaint — Open"

**Tools:** GHL or HubSpot + Make + Slack/Email + ClickUp

**Testing checklist:**
- [ ] Tag test contact as "Complaint"
- [ ] Confirm manager alert received
- [ ] Confirm high-priority task created

**Human review:** Manager responds to all complaints within 24 hours. Complaint is not closed until customer confirms resolution or owner signs off.

---

## Recipe 09: Weekly Dashboard Summary (Auto-Generated)

**Business problem:** Owner has no time to compile weekly numbers manually.

**Trigger:** Every Friday at 4 PM (scheduled trigger)

**Actions:**
1. Pull last 7 days of data from:
   - CRM: new leads, lead sources, pipeline changes
   - Scheduling tool: appointments booked, completed, no-shows
   - Task board: tasks completed, overdue tasks
2. Compile into Google Sheet or structured format
3. Send to OpenAI/Claude with Weekly Summary Prompt
4. AI generates a narrative summary
5. Summary sent to owner via email at 4:30 PM Friday

**Tools:** Make + GHL/HubSpot + Google Sheets + OpenAI API + Gmail

**Testing checklist:**
- [ ] Run test scenario manually
- [ ] Confirm data pulled correctly from all sources
- [ ] Confirm AI summary generated and sent
- [ ] Confirm summary is accurate

**Human review:** Owner reviews the summary. Front desk also completes the manual Friday Summary form in Command Center as a cross-check.

---

## Recipe 10: New SOP Request → Draft SOP

**Business problem:** SOPs never get written because no one has time to start from scratch.

**Trigger:** Staff member or manager submits a "New SOP Needed" form (simple Typeform or Google Form)

**Form fields:**
- Process name
- What triggers this process
- Who does it
- Tools involved
- Rough description of the steps

**Actions:**
1. Form submits → webhook triggers Make
2. Make sends form data to OpenAI/Claude with the SOP Creation Prompt
3. AI generates a draft SOP using the standard OwnerOS format
4. Draft SOP is created in Notion (SOP Library) with status "Draft — Needs Review"
5. Owner/manager tagged for review with a 3-day deadline

**Tools:** Typeform + Make + OpenAI API + Notion

**Testing checklist:**
- [ ] Submit test SOP request form
- [ ] Confirm Notion SOP record created with correct format
- [ ] Confirm AI draft is reasonable starting point
- [ ] Confirm reviewer is tagged

**Human review:** Every AI-drafted SOP must be reviewed and approved by a manager before status changes to "Active." AI is a drafting tool, not a final author.
