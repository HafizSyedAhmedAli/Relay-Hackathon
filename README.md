# 🔵 Relay — AI-Powered Customer Support Platform

> **Built for Hackathon HEC GenAI<br> 
> Live Demo (Admin Dashboard):** [https://relay-hackathon-web.vercel.app]<br>
> Live Demo (Client):** [https://relay-hackathon-widget.vercel.app/?organizationId=org_39yVuORsf1fLVCmFRbKEtSxWtBq]

Relay is a full-stack customer support platform that combines a real-time operator dashboard with an embeddable chat widget. Businesses can manage customer conversations, train an AI assistant on their own documents, connect voice calling via Vapi, and let the AI handle — or escalate — support tickets automatically.

---

## 🔐 Demo Credentials

Use these to log straight in and explore without signing up:

| Field | Value |
|-------|-------|
| **Email** | `testhackathonhec@gmail.com` |
| **Password** | `EhrG2P4C6jbd` |

> After logging in, you'll be placed into a pre-configured organization that already has sample data, uploaded knowledge base files, and Vapi connected.

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

#### 📄 Pre-loaded FAQ Document

The demo organization already has **`faq.txt`** uploaded to the knowledge base. This is a customer support FAQ covering account management, billing, features, and technical support. You can go straight to the widget and test the AI with real questions from it.

**Try asking the AI these questions in the chat widget:**

| Topic | Sample Question |
|-------|----------------|
| Account | *"How do I reset my password?"* |
| Account | *"Can I have multiple accounts?"* |
| Account | *"How do I enable two-factor authentication?"* |
| Billing | *"What are your pricing plans?"* |
| Billing | *"Do you offer refunds?"* |
| Billing | *"How do I cancel my subscription?"* |
| Billing | *"What payment methods do you accept?"* |
| Features | *"What file types can I upload?"* |
| Features | *"Is there a mobile app?"* |
| Features | *"How do I share projects with my team?"* |
| Technical | *"Is my data secure?"* |
| Technical | *"Do you have an API?"* |
| Technical | *"What browsers do you support?"* |

> **Out-of-scope test:** Ask something *not* in the FAQ, like *"What's the weather like?"* — the AI will say it doesn't know and offer to connect you with a human instead.

You can also upload your own additional documents using **Add New** to see the ingestion pipeline in action.

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
https://relay-hackathon-widget.vercel.app/?organizationId=org_39yVuORsf1fLVCmFRbKEtSxWtBq
```

### Widget Flow

1. **Intro / Auth** — The customer enters their name and email to start a session.
2. **Selection Screen** — They choose between:
   - 💬 **Start chat** — opens a text conversation with the AI
   - 🎤 **Start voice call** *(if Vapi is configured)* — starts a live voice call with a Vapi AI assistant
   - 📞 **Call us** *(if a phone number is configured)* — shows the business phone number to call
3. **Chat** — The AI responds using the knowledge base. If it can't help, it offers to escalate to a human. Quick-reply suggestions appear after the first message.
4. **Inbox** — Customers can tap the inbox icon at the bottom to review all their previous conversations and their statuses.

---

### 🎤 Testing the Voice Call

When you open the widget and tap **Start voice call**, you'll be connected to a live Vapi AI voice agent. Below is a sample conversation script you can follow — just speak naturally and the agent will respond.

> **Note:** Allow microphone access when prompted by your browser.

---

**Sample Voice Conversation Script**

```
AI:   Hello. You've reached Vapi Bank customer support.
      My name is Tom. How may I assist you today?

You:  Can you check my balance?

AI:   To verify your account, please say the last four digits
      of your phone number one digit at a time.

You:  One. Two. Three. Four.

AI:   I found an account for John Doe. Is that you?

You:  Yes. That's me. Tell me the balance.

AI:   Your current balance is two thousand five hundred thirty-four
      dollars and sixty-seven cents. Is there anything else
      I can help you with today?

You:  No thanks.

AI:   Thank you for calling Vapi Bank. Have a wonderful day.
```

---

This demonstrates the full voice call loop — identity verification, data lookup, and a natural conversation close — all handled by the AI without any human operator.

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

## 🏗️ Tech Stack

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
2. ✅ Open the widget demo link, enter any name + email, and start a chat
3. ✅ Ask *"How do I reset my password?"* — AI answers from the pre-loaded FAQ
4. ✅ Ask *"What are your pricing plans?"* — AI gives the full plan breakdown
5. ✅ Ask *"What's the capital of France?"* — AI says it doesn't know and offers a human
6. ✅ Watch the conversation appear live in the dashboard while you're chatting
7. ✅ Reply from the dashboard — the customer sees it instantly in the widget
8. ✅ Try the **✨ Enhance** button on a rough draft reply in the dashboard
9. ✅ Go to **Knowledge Base** — see the pre-loaded `faq.txt` file in the table
10. ✅ Upload a new document and ask the AI a question from it in the widget
11. ✅ Open the widget, tap **Start voice call**, and follow the voice script above
12. ✅ Mark a conversation as Resolved from the dashboard

---

*Made with ❤️ for HEC GenAI Hackathon*
