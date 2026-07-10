# 🔗 CRM Integration Guide

## Quick Integration Recipes

### 1️⃣ **Zapier Integration** (30 seconds)

**Setup:**
1. Create new Zap: "Catch Webhooks by Zapier"
2. Copy webhook URL
3. Add to environment: `WEBHOOK_URL_ZAPIER=https://hooks.zapier.com/...`
4. Add this to `/app/api/contact/route.ts` after email sent:

```typescript
// After successful email send, notify Zapier
if (process.env.WEBHOOK_URL_ZAPIER) {
  await fetch(process.env.WEBHOOK_URL_ZAPIER, {
    method: 'POST',
    body: JSON.stringify({
      name,
      phone,
      service,
      priority: leadAnalysis.priority,
      category: leadAnalysis.category,
    }),
  }).catch(console.error);
}
```

**Use Cases:**
- Send to Google Sheets spreadsheet
- Create CRM contact in HubSpot
- Send Slack notification
- Add to Mailchimp list

---

### 2️⃣ **SMS Alert for High-Priority Leads**

**Setup:**
1. Get API key from Twilio (twilio.com)
2. Add environment variables:
```env
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
TWILIO_PHONE=+1234567890
ALERT_PHONE=+1234567890
```

3. Create `/app/api/contact/route.ts` helper:
```typescript
import twilio from 'twilio';

async function sendSMSAlert(name: string, priority: string, phone: string) {
  if (priority !== 'high') return;
  
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  
  await client.messages.create({
    from: process.env.TWILIO_PHONE,
    to: process.env.ALERT_PHONE,
    body: `🚀 HIGH PRIORITY LEAD: ${name} (${phone}) - Reply for details`,
  });
}

// Call in contact route after analysis
await sendSMSAlert(name, leadAnalysis.priority, phone);
```

---

### 3️⃣ **HubSpot CRM Integration**

**Setup:**
1. Get HubSpot API key from hubspot.com
2. Add: `HUBSPOT_API_KEY=pat-na1-xxx...`
3. Create lead in HubSpot:

```typescript
async function createHubSpotContact(
  name: string,
  phone: string,
  service: string,
  priority: string
) {
  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        firstname: name.split(' ')[0],
        lastname: name.split(' ')[1] || '',
        phone,
        lifecyclestage: priority === 'high' ? 'marketingqualifiedlead' : 'lead',
        hs_lead_status: service,
      },
    }),
  });
  
  return response.json();
}

// Call in contact route
const hubspotContact = await createHubSpotContact(name, phone, service, leadAnalysis.priority);
```

---

### 4️⃣ **Discord Notification**

**Setup:**
1. Create Discord server & webhook (Server Settings → Webhooks)
2. Add: `DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...`

```typescript
async function notifyDiscord(name: string, priority: string, service: string) {
  const colors = {
    high: 0xff0000,    // Red
    medium: 0xffa500,  // Orange
    low: 0x00ff00,     // Green
  };
  
  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify({
      embeds: [{
        title: `${priority.toUpperCase()} Priority Lead`,
        description: `**Name:** ${name}\n**Service:** ${service}`,
        color: colors[priority as keyof typeof colors],
      }],
    }),
  });
}

// Call in contact route
await notifyDiscord(name, leadAnalysis.priority, service);
```

---

### 5️⃣ **Email Routing by Priority**

**Setup:**
1. Add multiple recipient emails:
```env
CONTACT_EMAIL_HIGH=sales@brandmatrix.com
CONTACT_EMAIL_MEDIUM=leads@brandmatrix.com
CONTACT_EMAIL_LOW=mail@brandmatrix.com
```

2. Update `/app/api/contact/route.ts`:
```typescript
// Route based on priority
let toEmail = process.env.CONTACT_EMAIL;
if (leadAnalysis.priority === 'high') {
  toEmail = process.env.CONTACT_EMAIL_HIGH || toEmail;
} else if (leadAnalysis.priority === 'medium') {
  toEmail = process.env.CONTACT_EMAIL_MEDIUM || toEmail;
} else {
  toEmail = process.env.CONTACT_EMAIL_LOW || toEmail;
}

await transporter.sendMail({
  // ...existing,
  to: toEmail,
  subject: `[${leadAnalysis.priority.toUpperCase()}] ${name} - ${service}`,
});
```

---

### 6️⃣ **Lead History Database (Supabase)**

**Setup:**
1. Create project on supabase.com
2. Create leads table:
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id TEXT UNIQUE,
  name TEXT,
  phone TEXT,
  service TEXT,
  priority TEXT,
  category TEXT,
  sentiment TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

3. Add: `SUPABASE_URL=https://xxx.supabase.co` and `SUPABASE_KEY=xxx`

4. Save leads in database:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function saveLeadToDatabase(
  leadId: string,
  name: string,
  phone: string,
  service: string,
  analysis: LeadAnalysis
) {
  const { error } = await supabase.from('leads').insert({
    lead_id: leadId,
    name,
    phone,
    service,
    priority: analysis.priority,
    category: analysis.category,
    sentiment: analysis.sentiment,
  });
  
  if (error) console.error('Failed to save lead:', error);
}

// Call in contact route after analysis
const leadId = `lead_${Date.now()}`;
await saveLeadToDatabase(leadId, name, phone, service, leadAnalysis);
```

---

### 7️⃣ **Google Sheets Auto-Update**

**Setup:**
1. Create Google Sheet
2. Enable Google Sheets API
3. Use `googleapis` npm package:

```bash
npm install googleapis google-auth-library
```

4. Add service account key to environment (as JSON string)

```typescript
import { google } from 'googleapis';

async function appendToSheet(
  name: string,
  phone: string,
  service: string,
  priority: string
) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SHEETS_KEY || '{}'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  const sheets = google.sheets({ version: 'v4', auth });
  
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Leads!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[new Date().toISOString(), name, phone, service, priority, 'new']],
    },
  });
}

// Call in contact route
await appendToSheet(name, phone, service, leadAnalysis.priority);
```

---

## 📊 Integration Comparison

| Service | Speed | Cost | Features |
|---------|-------|------|----------|
| Zapier | ⭐⭐⭐ | $$ | 3000+ apps, automations |
| Discord | ⭐⭐⭐⭐⭐ | FREE | Team notifications |
| SMS (Twilio) | ⭐⭐ | $$ | Instant alerts |
| HubSpot | ⭐⭐ | $$$ | Full CRM |
| Supabase | ⭐⭐⭐ | $ | Database + auth |
| Google Sheets | ⭐⭐⭐ | FREE | Simple tracking |

---

## 🔄 Recommended Setup (Starter)

**Best ROI for early stage:**
1. ✅ Discord notifications (FREE) → team awareness
2. ✅ Google Sheets (FREE) → lead tracking
3. ✅ Zapier (11/mo) → email sequences + CRM

**Combined flow:**
```
Lead submitted
    ↓
Sent to all 3 simultaneously:
├─ Discord notification (instant alert)
├─ Google Sheets (persistent record)
└─ Zapier → Send welcome email
           → Create HubSpot contact
           → Add to Mailchimp list
```

---

## 🚀 Advanced (Production)

**Enterprise setup:**
```
Lead submitted
    ↓
Send to:
├─ Supabase database (primary storage)
├─ Discord (team notification)
├─ SMS alert (if HIGH priority)
├─ Zapier webhook (CRM sync)
└─ Email routing (by priority)
    ↓
Background job processes:
├─ Generate AI follow-up email
├─ Create calendar event for sales
├─ Add to Mailchimp segment
└─ Log to analytics dashboard
```

---

## 📝 Implementation Checklist

- [ ] Pick primary CRM (HubSpot/Pipedrive/Supabase)
- [ ] Add database for lead history
- [ ] Set up team notifications (Discord/Slack)
- [ ] Add email routing by priority
- [ ] Implement Zapier automations
- [ ] Test full flow end-to-end
- [ ] Monitor API usage & costs
- [ ] Create backup email server
- [ ] Document team handoff process

---

**Pro Tip:** Start with Discord + Zapier + Google Sheets. Add database when you hit 50+ leads/month.
