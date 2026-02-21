# 🔵 Relay — AI-Powered Customer Support Platform

> **Built for [Hackathon Name] · Live Demo:** [your-deployed-url-here]

Relay is a full-stack customer support platform that combines a real-time operator dashboard with an embeddable chat widget. Businesses can manage customer conversations, train an AI assistant on their own documents, connect voice calling via Vapi, and let the AI handle — or escalate — support tickets automatically.

---

## 🔐 Demo Credentials

Use these to log straight in and explore without signing up:

| Field | Value |
|-------|-------|
| **Email** | `[YOUR_EMAIL_HERE]` |
| **Password** | `[YOUR_PASSWORD_HERE]` |

> After logging in, you'll be placed into a pre-configured organization that already has sample data, uploaded knowledge base files, and Vapi connected.

### Vapi API Keys (for the Voice Assistant section)
If you'd like to test connecting Vapi from scratch:

| Key | Value |
|-----|-------|
| **Public API Key** | `[YOUR_VAPI_PUBLIC_KEY]` |
| **Private API Key** | `[YOUR_VAPI_PRIVATE_KEY]` |

---

## 🗺️ What You Can Explore

Relay has two parts: the **Operator Dashboard** (where your support team works) and the **Chat Widget** (what your customers see). Both are live.

---

## 🖥️ Part 1 — The Operator Dashboard

### Step 1 · Sign In
Go to the deployed URL and sign in using the demo credentials above. You'll land on the **Conversations** page.

---

### Step 2 · Conversations
This is the main workspace for support operators.

- The **left panel** lists all customer conversations, with real-time status indicators (Unresolved, Escalated, Resolved).
- Use the **filter dropdown** at the top of the panel to filter by status.
- Click any conversation to open it.
- Inside a conversation you can:
  - Read the full message history between the AI/operator and the customer.
  - Type a reply in the box at the bottom and press **Send**.
  - Click **✨ Enhance** to have AI rewrite your draft into a more professional message before sending.
  - Toggle the conversation status using the button in the top-right corner (Unresolved → Escalated → Resolved).
- The **right panel** shows the customer's device info, browser, location (inferred from timezone), and session details.

---

### Step 3 · Knowledge Base
Navigate to **Knowledge Base** in the sidebar.

This is where you upload documents that the AI uses to answer customer questions. The AI will **only** answer based on what's in here — it never makes things up.

- Click **Add New** to upload a file (PDF, TXT, or CSV).
- Give it a **category** to organize your docs.
- The file is processed, chunked, embedded, and added to the vector search index automatically.
- Uploaded files appear in the table. You can delete them at any time.

> **Try it:** Upload a short FAQ document, then go to the widget and ask a question from it — the AI will find the answer.

---

### Step 4 · Widget Customization
Navigate to **Widget Customization** in the sidebar.

Configure how the chat widget looks and behaves for your customers:

- **Greeting Message** — the first message customers see when they open the chat.
- **Default Suggestions** — up to 3 quick-reply buttons shown to customers at the start of a conversation to guide them.
- **Voice Assistant Settings** *(only visible if Vapi is connected)* — choose which Vapi assistant and phone number to surface in the widget.

Hit **Save Settings** when done.

---

### Step 5 · Voice Assistant (Vapi Plugin)
Navigate to **Voice Assistant** in the sidebar.

This page lets you connect your Vapi account to enable AI voice calls and phone support directly in the widget.

**To connect:**
1. Click **Connect**.
2. Enter the Public and Private API keys from the credentials table above.
3. Click **Connect** — your Vapi assistants and phone numbers will load automatically.

Once connected you'll see two tabs:
- **Phone Numbers** — all Vapi numbers on your account with their status.
- **AI Assistants** — all configured assistants with their model and greeting message.

Click **Configure** to jump to Widget Customization and assign an assistant/number to the widget.

To disconnect, click **Disconnect** and confirm.

---

### Step 6 · Plans & Billing
Navigate to **Plans & Billing** in the sidebar to see the pricing table powered by Clerk's billing system. Upgrading a plan increases the maximum number of operators allowed in the organization and unlocks premium features.

---

## 💬 Part 2 — The Customer Widget

The widget is what your customers interact with. You can open it directly at:

```
[YOUR_WIDGET_URL]/?organizationId=[YOUR_ORG_ID]
```

> The demo link with the correct `organizationId` pre-filled is: **[YOUR_WIDGET_DEMO_LINK]**

### Widget Flow

1. **Intro / Auth** — The customer enters their name and email to start a session.
2. **Selection Screen** — They choose between:
   - 💬 **Start chat** — opens a text conversation with the AI
   - 🎤 **Start voice call** *(if Vapi is configured)* — starts a live voice call with a Vapi AI assistant
   - 📞 **Call us** *(if a phone number is configured)* — shows the business phone number to call
3. **Chat** — The AI responds using the knowledge base. If it can't help, it offers to escalate to a human. Quick-reply suggestions appear after the first message.
4. **Inbox** — Customers can tap the inbox icon at the bottom to review all their previous conversations and their statuses.

---

## ⚙️ How the AI Works

| Situation | What Happens |
|-----------|-------------|
| Customer asks a question | AI searches the knowledge base and answers from it |
| No answer found in KB | AI offers to escalate to a human operator |
| Customer confirms escalation | Conversation status flips to **Escalated** |
| Operator replies | Status becomes **Escalated** (human took over) |
| Issue resolved | AI (or operator) marks conversation **Resolved** |
| Customer reopens a resolved chat | They're told the conversation is closed |

The AI **never** guesses or makes things up. If it's not in the knowledge base, it says so and offers human support.

---

## 🏗️ Tech Stack (for reference)

| Layer | Technology |
|-------|-----------|
| Frontend (Dashboard) | Next.js 16, Tailwind CSS, shadcn/ui |
| Frontend (Widget) | Next.js 16, Tailwind CSS |
| Backend / Database | Convex (real-time, serverless) |
| Auth | Clerk (orgs, billing, SSO) |
| AI Agent | Convex Agent + Google Gemini 2.5 Flash |
| Vector Search / RAG | Convex RAG + Gemini Embeddings |
| Voice | Vapi |
| Secret Management | AWS Secrets Manager |
| Error Monitoring | Sentry |

---

## 🎯 Key Things to Test

Here's a suggested walkthrough to see everything in action:

1. ✅ Sign in with the demo credentials
2. ✅ Open the widget demo link and start a chat as a customer
3. ✅ Watch the conversation appear live in the dashboard
4. ✅ Reply from the dashboard — the customer sees it instantly
5. ✅ Try the **Enhance** button on a rough draft reply
6. ✅ Upload a document to the Knowledge Base
7. ✅ Go back to the widget and ask a question about that document
8. ✅ Ask something the AI doesn't know — watch it offer escalation
9. ✅ Connect Vapi using the provided keys and explore the Voice Assistant tab
10. ✅ Mark a conversation as Resolved from the dashboard

---

*Made with ❤️ for [Hackathon Name] · [Your Name / Team Name]*
