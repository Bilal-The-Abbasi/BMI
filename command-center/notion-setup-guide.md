# OwnerOS AI — Command Center Setup Guide (Notion)

The OwnerOS Command Center is the client-facing portal where every deliverable, SOP, task, and dashboard lives. This guide explains how to build it in Notion.

---

## Why Notion for V1

- Free to start (up to 10 members)
- Easy to white-label with client logo and branding
- No-code: both founders can build and update it
- Clients can access it on any device
- Pages are shareable via link (read-only or edit)
- Databases support filtered views by Room, status, owner
- Can be expanded with Notion AI, databases, and embeds later

---

## Command Center Structure

```
📁 [Business Name] — OwnerOS Command Center
├── 🏠 Dashboard (Main Page)
├── 🚪 Room 1: The Front Door
├── 📋 Room 2: The Follow-Up Desk
├── 📖 Room 3: The Playbook
│   ├── SOP Library (database)
│   └── FAQ Knowledge Base (database)
├── ⚙️ Room 4: The Workroom
│   ├── Task Board (database)
│   └── Recurring Checklists
├── 📊 Room 5: The Control Room
│   └── Weekly Summary Log (database)
├── 🤖 AI Prompt Library (database)
├── 📅 Meeting Notes (database)
├── 🔧 Tool Stack Reference
├── 📁 Project Assets
└── 🔒 Access + Credentials Reference
```

---

## Step-by-Step Build Instructions

### Step 1: Create the Notion Workspace

1. Create a new Notion workspace named "[Business Name] — OwnerOS"
2. Invite client as a Member (or set as Guest with view-only access for read-heavy clients)
3. Set the workspace icon to the client's logo if available
4. Set the workspace cover to a professional solid color or branded image

---

### Step 2: Build the Dashboard (Main Page)

Create a page called "🏠 Dashboard" as the first page the client sees.

Include:

**Header section:**
- Business name + tagline
- "Your OwnerOS Operating System" heading
- Last updated date (manual or using Notion date property)

**Project status section (at the top):**
- Status: 🟢 Live / 🟡 In Progress / 🔴 Needs Attention
- Current phase
- Next key date
- Owner weekly dashboard link (Room 5)

**Quick links section:**
- Links to all 5 Rooms
- Link to Task Board
- Link to SOP Library
- Link to AI Prompt Library
- Link to Weekly Summary

**Pending approvals callout:**
- A callout block (yellow) listing anything waiting for client review
- Update this manually as needed

---

### Step 3: Build Each Room Page

Each Room page follows the same template:

```
Room [Number]: [Room Name]
---
📌 Purpose: [One sentence]

🔵 Current State: [What's built and live]
🟡 In Progress: [What's being built]
⚪ Not Yet Built: [What's planned later]

📋 Systems in This Room:
- [System 1] → [link or embedded database view]
- [System 2]

📚 Related SOPs:
- [SOP name] → [link]

🤖 Related Prompts:
- [Prompt name] → [link]

📝 Owner Notes:
[Space for the owner to add notes or questions]
```

---

### Step 4: Build the SOP Library Database

Create a Notion database called "SOP Library."

**Properties:**
| Property | Type | Options |
|----------|------|---------|
| Title | Title | — |
| Room | Select | Room 1–5 |
| Owner | Person | — |
| Status | Select | Active, Draft, Needs Review, Archived |
| Last Updated | Date | — |
| Version | Text | e.g., v1.2 |
| Tags | Multi-select | Lead, Follow-up, Onboarding, etc. |

**Views:**
- All SOPs (default)
- By Room (grouped)
- Needs Review (filtered by status)
- My SOPs (filtered by owner)

---

### Step 5: Build the AI Prompt Library Database

Create a database called "AI Prompt Library."

**Properties:**
| Property | Type | Notes |
|----------|------|-------|
| Prompt Name | Title | — |
| Category | Select | Lead Response, Follow-up, SOP, Report, etc. |
| Use Case | Text | When to use this prompt |
| Input Needed | Text | What to give the AI |
| Prompt Text | Text | The actual prompt |
| Expected Output | Text | What the AI should return |
| Review Note | Text | Human review reminder |
| Status | Select | Active, Draft, Deprecated |

---

### Step 6: Build the Weekly Summary Log

Create a database called "Weekly Summaries."

**Properties:**
| Property | Type |
|----------|------|
| Week Of | Date |
| Lead Count | Number |
| Appointments Booked | Number |
| Follow-Ups Sent | Number |
| Open Tasks | Number |
| Highlights | Text |
| Issues | Text |
| Owner Action Items | Text |

**Completion cadence:** Front desk completes every Friday; owner reviews every Monday.

---

## Client Handoff Instructions

When handing off the Command Center:

1. Walk client through the Dashboard in the 1-hour owner walkthrough
2. Show them how to navigate between Rooms
3. Demonstrate adding a note to an SOP
4. Show them the Weekly Summary — walk through how to fill it out
5. Confirm they can access everything on mobile
6. Give them the "Command Center Quick Reference" (1 page — see naming-conventions.md)

---

## Maintenance Notes

- Add a new SOP: client or OwnerOS team creates a new entry in the SOP Library database
- Update FAQ: client or assigned staff member edits the FAQ database entry directly
- Add a prompt: OwnerOS team adds to Prompt Library, marks as Active
- Archive old items: change status to "Archived" — do not delete
