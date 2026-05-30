# OwnerOS AI — Automation Recipes 11–20

---

## Recipe 11: New Email Inquiry → Categorized CRM Task

**Business problem:** Emails pile up in a shared inbox and no one knows whose job it is to respond.

**Trigger:** New email received in the shared business inbox (e.g., info@businessname.com)

**Actions:**
1. Email is received → AI reads subject + first 100 words
2. AI categorizes: New Lead / Existing Client / Complaint / Vendor / Spam
3. Create CRM task with: category, sender, subject, email date, assigned staff based on category
4. Staff receives task with link to the email
5. If AI confidence is low → categorize as "Needs Review" and assign to manager

**Tools:** Gmail + Make + OpenAI API + GHL/HubSpot/ClickUp

**Setup steps:**
1. Set up Gmail watch in Make (monitors shared inbox)
2. Make → OpenAI: classify the email
3. Make → CRM: create task with classification and assignment
4. Test with 5 different email types

**Testing checklist:**
- [ ] Send test emails of each category type
- [ ] Confirm correct categorization for 4 out of 5
- [ ] Confirm task created with correct assignment
- [ ] Confirm low-confidence items flagged as "Needs Review"

**Human review:** Any email involving a complaint, legal matter, or media inquiry must be reviewed by manager before responding.

**Privacy note:** Email content processed by AI — ensure your email provider and AI tool have appropriate data agreements. Do not include PHI.

---

## Recipe 12: Payment Overdue → Reminder Sequence

**Business problem:** Late invoices require manual follow-up that gets deprioritized.

**Trigger:** Invoice status = "Overdue" in accounting software (triggered at Day 1, Day 10, Day 20)

**Actions:**
- Day 1 past due: Send friendly email reminder (Invoice Reminder Template #1)
- Day 10 past due: Send follow-up email + SMS (Template #2 — more direct)
- Day 20 past due: Create urgent task for manager: "Manual call — overdue invoice — [Client] — [Amount]"
- Day 20 past due: Send final notice email (Template #3 — state consequences)

**Tools:** QuickBooks Online or FreshBooks + Make + Gmail + GHL

**Setup steps:**
1. Enable webhook from accounting software for "Invoice Overdue" events
2. Build Make sequence with 3 delay-based actions
3. Configure email templates (pre-approved by owner)
4. Configure day 20 task creation in ClickUp

**Testing checklist:**
- [ ] Create a test overdue invoice
- [ ] Confirm Day 1 reminder triggers
- [ ] Confirm Day 20 task created

**Human review:** Day 20 action requires manager review before final notice is sent. Do not automate final notices without approval.

**Privacy note:** Invoice amounts are business-confidential. Do not send these via public or unsecured channels.

---

## Recipe 13: New Client Signed → Onboarding Checklist

**Business problem:** Onboarding steps are inconsistent and things get missed on every new client.

**Trigger:** New client contract is signed (signed document event from DocuSign / PandaDoc, or manual CRM status change)

**Actions:**
1. Create a new project in ClickUp with the standard Onboarding Checklist template
2. Assign tasks to correct team members (PM, client communication, delivery)
3. Send welcome email to client (using Welcome Email Template — see delivery-assets)
4. Create 5 calendar reminders for key milestones: kickoff, Week 1 review, Week 2 review, training, handoff
5. Add client to CRM with status: "Active Client — Implementation"

**Tools:** PandaDoc or DocuSign + Make + ClickUp + Gmail + GHL

**Testing checklist:**
- [ ] Sign a test contract
- [ ] Confirm ClickUp project created with all checklist tasks
- [ ] Confirm welcome email sent
- [ ] Confirm CRM status updated

---

## Recipe 14: Form Submission → Qualification Score

**Business problem:** Not all leads are equal — staff waste time on unqualified inquiries.

**Trigger:** New inquiry form submitted

**Form fields scored:**
- Industry (matches target verticals = high score)
- Employee count (3–50 = high score)
- Specific pain mentioned (yes = high score)
- Budget range (within range = high score)
- Decision authority (owner = high score)

**Actions:**
1. Form submission triggers Make
2. Make applies scoring rules based on field values
3. Total score assigned: 0–10
4. CRM record created with score field populated
5. If score ≥ 7: assign to "Hot Lead" queue and notify sales immediately
6. If score 4–6: assign to standard follow-up queue
7. If score ≤ 3: assign to "Low Priority — Nurture" queue

**Tools:** Typeform + Make + GHL/HubSpot

**Testing checklist:**
- [ ] Submit test forms with different profiles
- [ ] Confirm scores assigned correctly
- [ ] Confirm correct queue assignment

**Human review:** High-scoring leads should receive a human review within 30 minutes. Do not rely solely on automated scoring for sales decisions.

---

## Recipe 15: Social Content Request → Approval Queue

**Business problem:** Content requests come in via DM, Slack, or email and disappear without getting done.

**Trigger:** Staff member or owner submits a content request form

**Form fields:**
- Content type (post, story, email, blog)
- Platform
- Topic or message
- Target audience
- Preferred deadline
- Any images or assets available

**Actions:**
1. Form submits → Make creates a task in the Content Approval board (Notion/ClickUp)
2. Task status: "Requested — Awaiting Creation"
3. AI drafts a first version of the content using the appropriate Content Prompt
4. Draft added to the task as a note, status → "Draft — Needs Review"
5. Owner or marketing lead tagged for review
6. Approved content: status → "Approved — Schedule for Publishing"

**Tools:** Typeform + Make + OpenAI API + Notion + ClickUp

**Testing checklist:**
- [ ] Submit test content request
- [ ] Confirm task created in content board
- [ ] Confirm AI draft added
- [ ] Confirm reviewer tagged

**Human review:** All content requires human review and approval before publication. AI draft is a starting point only.

---

## Recipe 16: Negative Review Detected → Response Draft

**Business problem:** Negative reviews sit unanswered because no one has time to draft a response.

**Trigger:** New review below [X stars] detected via review monitoring tool or manual alert

**Actions:**
1. Review detected → Make triggered (via GBP API, ReviewTrackers, or manual webhook)
2. Review text sent to AI with Negative Review Response Prompt
3. AI generates draft response
4. Draft saved in Notion or Google Doc with review text, reviewer name, and date
5. Owner or manager tagged for review: "New negative review response draft — requires approval"
6. Once approved, response posted manually by staff

**Tools:** ReviewTrackers or GBP API + Make + OpenAI API + Notion + Gmail

**Human review:** Mandatory owner approval before any negative review response is posted. AI draft is never posted automatically.

---

## Recipe 17: New Hire → Onboarding Workflow

**Business problem:** New employee onboarding is inconsistent and depends on who's available.

**Trigger:** New employee record created in HR tool or manual form submitted

**Actions:**
1. Create onboarding project in ClickUp with standard New Employee Onboarding Checklist
2. Assign: tool setup tasks to operations, training tasks to manager, buddy assignment to team lead
3. Calendar invite sent for: Day 1 orientation, Week 1 check-in, Week 2 check-in
4. Send manager a "New Hire Prep Checklist" email (tool access to set up before Day 1)
5. Add new hire to command center with read-only access

**Tools:** Make + ClickUp + Gmail + Notion + HR tool (or manual form)

**Testing checklist:**
- [ ] Submit test new hire form
- [ ] Confirm ClickUp project created
- [ ] Confirm calendar invites generated
- [ ] Confirm manager prep email sent

---

## Recipe 18: Lead Inquiry with Phone Number → Instant Call Notification

**Business problem:** Staff don't know immediately when a hot lead comes in.

**Trigger:** New lead created in CRM with a phone number, from a high-priority source (web form, referral, paid ad)

**Actions:**
1. Lead created → Make checks if source = high-priority category
2. If yes: send immediate Slack/SMS/email notification to sales staff: "New hot lead: [Name] — [Service interested in] — [Phone] — Respond within 10 min"
3. Create CRM task: "Call or text [Name] — due: now"
4. If no response logged within 30 min: send escalation to manager

**Tools:** GHL or HubSpot + Make + Slack/SMS

**Testing checklist:**
- [ ] Create test lead with high-priority source
- [ ] Confirm notification received within 60 seconds
- [ ] Confirm task created
- [ ] Confirm escalation triggers at 30 minutes

**Human review:** Staff must respond to these alerts. Monitor response rate weekly.

---

## Recipe 19: Appointment No-Show → Re-Engagement SMS

**Business problem:** No-shows disappear without any attempt to reschedule.

**Trigger:** Appointment status = "No-Show" in scheduling tool

**Actions:**
1. Wait 30 minutes after appointment start time
2. Send re-engagement SMS: "We missed you today! We'd love to find a new time. Here's our booking link: [link]"
3. If no response in 48 hours: send follow-up email using No-Show Email Template
4. If no response in 7 days: add to "Inactive Leads" re-engagement list
5. Log in CRM: "No-show — [Date] — SMS + Email sent"

**Tools:** Calendly or Acuity + Make + GHL/SMS + Gmail

**Testing checklist:**
- [ ] Mark test appointment as no-show
- [ ] Confirm SMS sent 30 min after
- [ ] Confirm 48-hour email follow-up sends

**Human review:** If no-show is a long-standing client, review before sending automated messages — may warrant personal outreach instead.

---

## Recipe 20: Staff Meeting Notes → Task Extraction

**Business problem:** Meeting action items get written in notes and never acted on.

**Trigger:** Meeting notes document is saved in a designated Notion/Google Doc folder

**Actions:**
1. Notes saved → Make detects new document in "Meeting Notes" folder
2. Make sends document text to AI with Meeting Notes → Task List Prompt
3. AI extracts action items with owner, due date, and priority
4. Each action item created as a task in ClickUp with the extracted fields
5. Each assignee notified: "A task was assigned to you from [Meeting Name] — [Task]"

**Tools:** Notion or Google Docs + Make + OpenAI API + ClickUp + Gmail/Slack

**Testing checklist:**
- [ ] Save test meeting notes with clear action items
- [ ] Confirm tasks created in ClickUp with correct details
- [ ] Confirm assignees notified

**Human review:** Review AI-extracted tasks at the start of each work day. AI may miss nuance or misattribute tasks — final ownership should be confirmed by a human.

**Privacy note:** Meeting notes may contain sensitive business information. Use OpenAI with enterprise data agreements or a self-hosted model for sensitive discussions.
