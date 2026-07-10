# 🚀 AI-Powered Lead Generation System

## System Overview

Your website now features a **complete end-to-end lead generation pipeline** powered by OpenAI's GPT-4 Mini and Nodemailer. Every inquiry is analyzed, scored, and tracked for CRM integration.

---

## 📊 Architecture

### 1. **Lead Capture & Analysis Flow**

```
User fills contact form
          ↓
Form validation (name, phone, description required)
          ↓
POST to /api/contact [ENHANCED]
          ↓
AI Analysis (OpenAI GPT-4o-mini)
  ├─ Priority: high/medium/low
  ├─ Category: inferred from description
  └─ Sentiment: positive/neutral/negative
          ↓
Email sent to ashwitsharma834@gmail.com with analysis
          ↓
Confirmation email to user
          ↓
Analytics tracked via /api/lead-analytics
          ↓
Lead analysis badge displayed to user
```

---

## 🔑 API Endpoints

### **POST /api/contact** (Enhanced)
**Purpose:** Process service inquiry and analyze lead quality

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+1 (555) 123-4567",
  "service": "Video Editing", // optional
  "description": "I need a professional video for my product launch..."
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Request sent successfully.",
  "leadId": "lead_1703456789123",
  "analysis": {
    "priority": "high",
    "category": "product_launch",
    "sentiment": "positive"
  }
}
```

**Features:**
- ✅ AI-powered lead scoring
- ✅ Automatic priority classification
- ✅ Sentiment analysis
- ✅ Lead ID generation for tracking
- ✅ Admin email with analysis badge
- ✅ User confirmation email

---

### **POST /api/lead-analytics** (New)
**Purpose:** Track, store, and retrieve lead analytics

**Request Actions:**

#### 1. **Log a new lead:**
```json
{
  "action": "log",
  "name": "John Doe",
  "phone": "+1 (555) 123-4567",
  "service": "Video Editing",
  "priority": "high",
  "category": "product_launch",
  "sentiment": "positive"
}
```

Response:
```json
{
  "ok": true,
  "leadId": "lead_1703456789123",
  "lead": { /* lead object */ }
}
```

#### 2. **Update lead status:**
```json
{
  "action": "update-status",
  "leadId": "lead_1703456789123",
  "status": "contacted" // new/contacted/qualified/won/lost
}
```

#### 3. **Get analytics dashboard:**
```json
{
  "action": "get-analytics"
}
```

Response:
```json
{
  "ok": true,
  "analytics": {
    "totalLeads": 42,
    "byPriority": {
      "high": 12,
      "medium": 18,
      "low": 12
    },
    "byStatus": {
      "new": 18,
      "contacted": 12,
      "qualified": 8,
      "won": 3,
      "lost": 1
    },
    "bySentiment": {
      "positive": 28,
      "neutral": 12,
      "negative": 2
    },
    "byService": {
      "Video Editing": 8,
      "Logo Design": 6,
      "E-commerce": 5,
      /* ... more services ... */
    },
    "conversionRate": {
      "total": 42,
      "qualified": 8,
      "won": 3,
      "rate": "7.1%"
    },
    "recentLeads": [ /* 5 most recent leads */ ]
  }
}
```

---

## 🎨 Frontend Features

### **Enhanced Contact Form** (`components/contact-form.tsx`)

**New Features:**
1. **AI Sentiment Analysis Display**
   - Shows priority badge after submission: 🚀 High / ⚡ Medium / 📊 Low
   - Displays sentiment emoji: 😊 Positive / 😐 Neutral / 😟 Negative
   - Shows inferred category (product_launch, consultation, etc.)

2. **Loading State**
   - "Analyzing your request with AI..." during processing

3. **Enhanced Success Message**
   - ✅ "Your request has been analyzed and sent successfully"
   - Includes lead quality badge

4. **Error Handling**
   - Validates all required fields
   - Shows user-friendly error messages
   - Falls back gracefully if AI is unavailable

### **Visual Feedback:**
```
✅ Submission Success
┌─────────────────────────┐
│ 🚀 High Priority Lead    │
│ Category: Video Project   │
│ Sentiment: Positive 😊   │
└─────────────────────────┘
```

---

## 📧 Email Templates

### **To: Admin (ashwitsharma834@gmail.com)**

**Subject:** `[HIGH] New service request from John Doe`

**Content Includes:**
- Lead Priority badge (High/Medium/Low)
- Category & Sentiment analysis
- Timestamp of inquiry
- Full lead details (name, phone, service)
- Description with formatting

### **To: User (confirmation)**

**Subject:** `We received your service request`

**Content:**
- Thank you message
- What's next (team review → contact → proposal)
- 24-hour follow-up guarantee

---

## 🔧 Environment Variables Required

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_SECURE=false

# Contact Email
CONTACT_EMAIL=ashwitsharma834@gmail.com

# OpenAI (for AI analysis)
OPENAI_API_KEY=sk-proj-...your-key...
```

**Setup Guide:**
1. For Gmail: Enable "Less secure app access" or use App Passwords
2. For SendGrid/Mailgun: Update SMTP_HOST and credentials
3. Get OpenAI key from https://platform.openai.com/api-keys

---

## 📈 Lead Priority Logic

The AI analyzes:
- **Description length** - More detailed = higher priority
- **Keywords** - Urgency indicators (urgent, ASAP, needed, etc.)
- **Service complexity** - E-commerce > Static, Video > Logo, etc.
- **Contact quality** - Format validation, completeness
- **Sentiment** - Positive inquiries ranked higher

**Priority Scale:**
- **🚀 HIGH:** Detailed inquiry, urgent language, complex service, positive tone
- **⚡ MEDIUM:** Standard inquiry, reasonable details, clear needs
- **📊 LOW:** Vague inquiry, minimal detail, generic message

---

## 🎯 Usage Examples

### **Example 1: High-Priority Lead**
```
Name: Sarah Chen
Service: E-commerce Website
Description: "We need a complete e-commerce platform for our luxury fashion brand. We're launching in Q1 and need payment integration, inventory system, and mobile optimization. Budget is set. Timeline is strict."

→ Result: 🚀 HIGH | Category: e-commerce_launch | Sentiment: 😊 Positive
```

### **Example 2: Medium-Priority Lead**
```
Name: Mike Johnson  
Service: Logo Design
Description: "Looking for a new logo for my consulting business"

→ Result: ⚡ MEDIUM | Category: branding | Sentiment: 😐 Neutral
```

### **Example 3: Low-Priority Lead**
```
Name: Anonymous
Service: (not selected)
Description: "hello"

→ Result: 📊 LOW | Category: inquiry | Sentiment: 😐 Neutral
```

---

## 📊 Analytics Dashboard Usage

### **Get real-time metrics:**
```javascript
// Fetch analytics
const res = await fetch('/api/lead-analytics', {
  method: 'POST',
  body: JSON.stringify({ action: 'get-analytics' })
});
const { analytics } = await res.json();

// Use metrics
console.log(`Total leads: ${analytics.totalLeads}`);
console.log(`Conversion: ${analytics.conversionRate.rate}`);
console.log(`Win rate: ${(analytics.byStatus.won / analytics.totalLeads * 100).toFixed(1)}%`);
```

### **Track lead journey:**
```javascript
// 1. Lead comes in (logged by POST /api/contact)
// 2. Team reviews and updates status
await fetch('/api/lead-analytics', {
  method: 'POST',
  body: JSON.stringify({
    action: 'update-status',
    leadId: 'lead_1703456789123',
    status: 'contacted'
  })
});

// 3. Repeat for: contacted → qualified → won/lost
```

---

## 🚨 Fallback & Error Handling

**If OpenAI API is unavailable:**
- System defaults to `priority: 'medium'`, `category: 'general'`
- Lead still sent and tracked
- User still receives confirmation
- No blocking of lead capture

**If SMTP is misconfigured:**
- Clear error message returned to user
- Lead ID still generated for tracking
- Error logged for debugging

---

## 🔐 Security Considerations

1. **Input Validation:** All fields trimmed and validated
2. **Rate Limiting:** Consider adding with Next.js middleware
3. **API Keys:** Use environment variables, never commit to repo
4. **Email Privacy:** Leads stored in-memory (upgrade to database for production)
5. **GDPR Compliance:** Add privacy policy & consent checkbox for EU users

---

## 📦 Production Deployment Checklist

- [ ] Set up production SMTP credentials (SendGrid/AWS SES recommended)
- [ ] Store leads in a database (Supabase, MongoDB, PostgreSQL)
- [ ] Add rate limiting to `/api/contact`
- [ ] Implement lead export (CSV/JSON)
- [ ] Add CRM webhook integration (Zapier, Make, HubSpot)
- [ ] Set up email templates with branding
- [ ] Monitor OpenAI API usage and costs
- [ ] Add analytics dashboard (frontend + backend)
- [ ] Set up backup email server
- [ ] Test SMS notifications for high-priority leads

---

## 🎯 Next Steps

### **Immediate (Optional):**
1. Create a simple admin dashboard to view analytics
2. Add webhook to notify on HIGH priority leads
3. Export leads to Google Sheets daily

### **Medium-term:**
1. Integrate with CRM (HubSpot, Pipedrive, Monday.com)
2. Add lead scoring rules customization
3. Implement follow-up email sequences

### **Long-term:**
1. Add predictive lead scoring with ML
2. Create lead conversion funnel tracking
3. Build ROI attribution by service/channel
4. Add AI-powered follow-up suggestions

---

## 🐛 Debugging & Monitoring

**Check lead processing:**
```bash
# Test endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"123","description":"test inquiry"}'

# Check analytics
curl -X POST http://localhost:3000/api/lead-analytics \
  -H "Content-Type: application/json" \
  -d '{"action":"get-analytics"}'
```

**Monitor OpenAI calls:**
- Check OpenAI dashboard for API usage
- Monitor for high token consumption
- Alert on errors/failures

**Email debugging:**
- Verify SMTP credentials work: Use Nodemailer Test Account
- Check spam folder for emails
- Monitor email delivery rates

---

## 📞 Support

**Issues:**
- Lead not received? Check SMTP_HOST and CONTACT_EMAIL
- AI analysis not showing? Verify OPENAI_API_KEY is set
- Emails going to spam? Update "from" name and domain

**Quick test:**
1. Fill contact form on website
2. Check email inbox (may take 30s-2m)
3. Verify lead analysis badge shows on website

---

**Last Updated:** 2024
**System Version:** 1.0 (AI-Powered Lead Generation)
