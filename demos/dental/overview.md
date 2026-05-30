# Demo: Dental Office AI Admin Assistant

**Business:** Bright Smile Dental (fictional demo business)
**Location:** [City], [State]
**Size:** 6 staff (2 dentists, 1 hygienist, 2 front desk, 1 admin)
**Services:** General dentistry, cleanings, cosmetic, implants
**Revenue:** ~$1.2M/year

---

## The Before Scenario

**The problem:**
- Front desk fielded 40–60 calls per day
- New patient inquiries often went to voicemail — callbacks happened "when we have time"
- Staff spent significant time answering the same questions (insurance, appointment prep, costs)
- No SOP for how to handle new patient calls — everyone answered differently
- Appointment no-show rate: 14% — no reminder system beyond one email
- Post-appointment follow-up: nonexistent

---

## The After Scenario

**What OwnerOS AI built:**

> **Important disclaimer:** This demo involves a healthcare business. All AI-generated content for dental offices must be reviewed by the practice owner before use. No medical claims are made. No PHI is used in AI processing. Consult an attorney for HIPAA compliance guidance.

### New Patient Inquiry Workflow

1. New patient calls or submits "New Patient" web form
2. If via form: automated SMS within 60 seconds:
   > "Hi [Name]! Thanks for reaching out to Bright Smile Dental. We'd love to help you. Can you let us know: are you looking for a routine cleaning, a specific concern, or general check-in? We'll get you set up quickly!"
3. If missed call: automatic text-back within 2 minutes
4. Response routes to front desk CRM queue with new patient priority flag
5. Front desk follows the New Patient Inquiry SOP (R1-01 variant for dental)

### Front Desk SOP: New Patient Phone Call Script

**Opening:**
> "Thank you for calling Bright Smile Dental, this is [Name]. Are you a new patient or an existing patient?"

**New patient:**
> "Wonderful, we'd love to welcome you! Can I get your name and the best phone number for you?"
> "What brings you in today — is this a routine cleaning or something specific you've noticed?"
> [Listen, do not diagnose or make clinical statements]
> "Let me check our availability… we have [Date/Time] or [Date/Time] — which works better for you?"

**Before hanging up:**
> "Great! I'm sending you a confirmation text right now with your appointment details and a new patient form to complete before your visit. Is there anything else I can help you with?"

---

### AI Office Assistant — FAQ Knowledge Base

Staff can look up approved answers to common questions instantly.

**Sample FAQ entries:**

| Question | Approved Response |
|----------|------------------|
| "Do you accept [Insurance Name]?" | "We accept [List]. Please confirm with your insurance provider that Dr. [Name] is in-network before your visit. We'd be happy to help verify as well." |
| "How long does a cleaning take?" | "A routine cleaning and exam typically takes 60–90 minutes for new patients and 45–60 minutes for returning patients." |
| "Do you offer payment plans?" | "We do offer financing options through [Provider]. Our front desk can walk you through the options when you come in." |
| "What should I bring to my first appointment?" | "Please bring your insurance card, a photo ID, and complete the new patient form we'll send via text. Arrive 5–10 minutes early." |

---

### Appointment Reminder Sequence

| Step | Timing | Channel | Content |
|------|--------|---------|---------|
| 1 | 48 hours before | Email | Appointment details, location, parking, what to bring |
| 2 | 24 hours before | SMS | Brief reminder + confirm or reschedule option |
| 3 | 2 hours before | SMS | "Reminder: your appointment is at [Time]" |
| 4 | Post-visit (48 hours) | SMS | Check-in + review request (non-clinical) |

**No-show result:** No-show rate dropped from 14% to 6% in the demo model after reminder sequence implemented.

---

## Owner Weekly Summary (Sample)

**Bright Smile Dental — Week of [Date]**

**Patient Activity:**
- New patient inquiries: 18
- New patient appointments booked: 11 (61% conversion)
- Appointments completed: 47
- No-shows: 3 (6.4%)
- Appointment reminders sent: 94

**Recall / Reactivation:**
- Patients 6+ months overdue for cleaning contacted: 22
- Reappointments booked from recall: 7

**Front Desk:**
- FAQ knowledge base queries: 34 (staff looked up answers 34 times vs. asking the doctor)
- Average response time to new inquiries: 4 minutes (down from 2.5 hours)

**Owner action items:**
1. 3 new patients flagged "Insurance unclear" — review before their appointments
2. One patient complaint from Wednesday — see CRM note
3. Review request response rate: 23% — consider follow-up cadence adjustment

---

**Important note for healthcare demos:**
*All systems built for dental offices must comply with HIPAA. No PHI is processed through AI tools without a BAA. Staff response templates do not include clinical advice. The business owner and their compliance advisor must review all patient-facing content before it goes live. OwnerOS AI does not provide legal, medical, or HIPAA compliance advice.*
