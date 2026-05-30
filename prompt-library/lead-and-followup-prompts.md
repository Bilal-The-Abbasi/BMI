# OwnerOS AI — Lead Response & Follow-Up Prompts

---

> **Safety Rule (applies to ALL prompts in this library):**
> Review every AI output before use. Do not send any AI-generated content that includes:
> specific prices not approved by the owner · guaranteed outcomes · medical, legal, or financial claims ·
> commitments not explicitly authorized · personal health information about customers.

---

## Prompt 1: Website Inquiry Initial Response

**Use case:** Drafting a first response to a new website form inquiry
**Input needed:** Inquiry text, business name, service type, responder name

```
You are a friendly, professional customer service representative for [Business Name], a [business type].

A potential customer submitted this inquiry:
"[Paste inquiry text here]"

Write a warm, personalized first response email that:
- Addresses their specific question or request (do not give a generic reply)
- Thanks them for reaching out
- Offers one clear next step (book a call, schedule a consultation, etc.)
- Keeps the tone human, not corporate
- Is under 100 words
- Is signed: "[Responder Name] at [Business Name]"

Do NOT include specific pricing without approval. Do NOT make any guarantees about results.

⚠ REVIEW BEFORE SENDING: Verify all details are accurate for this business before using this response.
```

---

## Prompt 2: Missed Call Text-Back

**Use case:** Generating a personalized missed call text message
**Input needed:** Business name, any context about the missed call if known

```
Write a brief, friendly SMS message from [Business Name] to a customer who called but whose call we missed.

The message should:
- Be under 50 words
- Feel warm and human, not automated
- Acknowledge we missed their call
- Invite them to reply with what they need
- Include a name if possible: signed by "[Staff Name]"

Example tone: "Hi, this is Sarah from Glow Med Spa — we missed your call! What can we help you with today?"

⚠ REVIEW BEFORE SENDING: Confirm the message is appropriate before sending.
```

---

## Prompt 3: Quote Follow-Up Email

**Use case:** Following up on an unanswered quote
**Input needed:** Customer name, service quoted, date quote was sent, business name

```
Write a brief, non-pushy follow-up email for [Business Name] to a prospective customer named [Name] who received a quote for [Service] on [Date] and hasn't responded.

The email should:
- Reference the specific quote and service
- Ask if they have questions
- Be friendly and low-pressure
- Be under 75 words
- Have no sales pressure language

Do NOT include the quote amount unless specifically instructed.
Do NOT make any outcome guarantees.

⚠ REVIEW BEFORE SENDING: Verify the customer name and service details are correct.
```

---

## Prompt 4: Appointment Reminder

**Use case:** Customizing an appointment reminder message
**Input needed:** Customer name, service, date, time, location/video link, any prep instructions

```
Write a friendly appointment reminder SMS for the following appointment:

Customer: [Name]
Service: [Service type]
Date/Time: [Date and Time]
Location or call link: [Location or link]
Prep instructions: [Any prep needed, or "none"]

The message should:
- Confirm all key details
- Be under 80 words
- Sound like a human sent it, not an automated system
- Include one clear instruction for rescheduling: "Reply RESCHEDULE if you need to change your time"

⚠ REVIEW BEFORE SENDING: Confirm all appointment details are accurate.
```

---

## Prompt 5: Lost Lead Reactivation

**Use case:** Re-engaging a lead that went cold after 30+ days
**Input needed:** Lead name, service they inquired about, time since last contact, business name

```
Write a reactivation message from [Business Name] to a lead named [Name] who inquired about [Service] approximately [time ago] and hasn't moved forward.

The message should:
- Feel genuinely personal, not like a mass email
- Acknowledge that time has passed
- Create a low-pressure opportunity to reconnect
- Offer one simple next step
- Be under 100 words for email, 50 words for SMS

Do NOT assume why they didn't move forward.
Do NOT offer discounts without authorization.

⚠ REVIEW BEFORE SENDING: Confirm the customer name and inquiry context are accurate.
```

---

## Prompt 6: Review Request (Post-Service)

**Use case:** Asking a satisfied customer to leave a review
**Input needed:** Customer name, service received, review platform link, business name

```
Write a review request message from [Business Name] to [Customer Name] who recently received [Service].

The message should:
- Reference the specific service they received (personalized, not generic)
- Be genuine and brief — not overly salesy
- Include the review link: [Review platform link]
- Be under 60 words for SMS or 100 words for email
- Sound like a real person wrote it

Do NOT offer incentives for reviews without confirming this is legally compliant.

⚠ REVIEW BEFORE SENDING: Confirm the customer had a positive experience before sending a review request.
```

---

## Prompt 7: Referral Thank-You Message

**Use case:** Thanking a customer who referred a new lead
**Input needed:** Referrer name, business name, name of referral (optional), any referral program details

```
Write a thank-you message from [Business Name] to [Referrer Name] for referring [Referral Name / "a friend"] to the business.

The message should:
- Be warm and genuine
- Acknowledge the referral specifically
- Not feel transactional
- Mention the referral benefit if one exists: [Benefit, or "none — just genuine thanks"]
- Be under 100 words

⚠ REVIEW BEFORE SENDING: Confirm referral details are accurate before sending.
```
