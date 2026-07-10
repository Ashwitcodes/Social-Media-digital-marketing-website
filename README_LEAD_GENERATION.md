# 🎯 BrandMatrix - AI-Powered Digital Marketing Website

> **Complete end-to-end lead generation system with AI analysis, SMTP email integration, and real-time analytics.**

---

## ✨ Features

- 🤖 **AI-Powered Lead Analysis** - OpenAI GPT-4 analyzes every inquiry
- 📧 **Smart Email System** - Nodemailer integration with professional templates  
- 💬 **AI Chatbot** - Quick service inquiries via chat
- 📊 **Real-time Analytics** - Track leads by priority, status, sentiment
- 🎨 **Modern UI** - Dark theme with Framer Motion animations
- 📱 **Mobile Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Next.js with Turbopack compilation
- 🔗 **CRM Ready** - Easy integration with Zapier, HubSpot, webhooks

---

## 🚀 Quick Start

### 1. **Clone & Install**
```bash
git clone <repo>
cd v0-digital-marketing-website
pnpm install
```

### 2. **Configure Environment**
Create `.env.local`:
```env
# SMTP (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_SECURE=false
CONTACT_EMAIL=ashwitsharma834@gmail.com

# Optional: AI Analysis
OPENAI_API_KEY=sk-proj-...
```

### 3. **Run Development Server**
```bash
npm run dev
# Open http://localhost:3000
```

### 4. **Test Lead Submission**
- Visit website
- Fill contact form
- Check email (wait 30-60 seconds)
- See priority badge on website

---

## 📁 Project Structure

```
app/
├── api/
│   ├── contact/ ................. Lead capture with AI analysis
│   ├── lead-analytics/ .......... CRM & metrics endpoint
│   └── chat/ .................... AI chatbot
├── about/page.tsx ............... Team showcase
├── blog/page.tsx ................ Blog with AI images
├── demo/page.tsx ................ Demo showcase
├── services/page.tsx ............ Service offerings
├── contact/page.tsx ............. Contact page
└── page.tsx ..................... Homepage

components/
├── contact-form.tsx ............. Enhanced with lead badges
├── about.tsx .................... Team profiles
├── services.tsx ................. 12 service cards
├── hero.tsx ..................... Landing section
├── chatbot.tsx .................. AI chat widget
└── ui/ .......................... Radix UI components

public/
├── 1.jpeg to 6.jpeg ............ Blog/demo images
└── [other assets]

Documentation/
├── LEAD_GENERATION_SYSTEM.md .... Full system docs
├── CRM_INTEGRATION_GUIDE.md ..... Third-party integrations
├── IMPLEMENTATION_SUMMARY.md .... What's been built
└── QUICK_REFERENCE.md .......... Developer quick start
```

---

## 🎯 Key Features Explained

### **1. AI Lead Analysis**
Every submitted inquiry is automatically analyzed:
- **Priority Classification:** High/Medium/Low
- **Sentiment Detection:** Positive/Neutral/Negative  
- **Category Inference:** Identifies service type
- **Lead Scoring:** Automatically prioritizes follow-up

### **2. Smart Email System**
```
Lead submitted
    ↓
Admin receives: Detailed email with AI analysis badge
User receives: Confirmation email with next steps
    ↓
Email includes: Name, phone, service, description, priority, sentiment
```

### **3. Contact Form**
- Real-time service pre-fill from service cards
- AI analysis badge displays immediately after submission
- Validation for required fields (name, phone, description)
- Status messages (loading, success, error)

### **4. Analytics Dashboard API**
Track all your leads:
- Total leads captured
- Breakdown by priority (high/medium/low)
- Breakdown by status (new/contacted/qualified/won/lost)
- Conversion rates and metrics
- Sentiment distribution
- Service-based filtering

### **5. Modern Design**
- Dark creative studio theme
- Smooth Framer Motion animations
- Radial gradients and modern typography
- Mobile-first responsive design
- Tailwind CSS 4.2 with custom utilities

---

## 🔌 API Reference

### POST /api/contact
**Lead Submission with AI Analysis**

Request:
```json
{
  "name": "Sarah Johnson",
  "phone": "+1-555-0123",
  "service": "Video Editing",
  "description": "Need 60-second promo video for product launch..."
}
```

Response:
```json
{
  "ok": true,
  "leadId": "lead_1703456789123",
  "analysis": {
    "priority": "high",
    "category": "video_production",
    "sentiment": "positive"
  }
}
```

### POST /api/lead-analytics
**CRM Operations**

Get analytics:
```json
{ "action": "get-analytics" }
```

Update lead status:
```json
{
  "action": "update-status",
  "leadId": "lead_1703456789123",
  "status": "contacted"
}
```

---

## 📊 System Architecture

```
┌─────────────────┐
│   Frontend      │ React 19 + Next.js 16
│   Contact Form  │ 
└────────┬────────┘
         │
         ↓ POST /api/contact
         │
┌────────────────────────┐
│   Lead Processing      │
├────────────────────────┤
│ • Validate fields      │
│ • AI Analysis (OpenAI) │
│ • Generate unique ID   │
└────────┬───────────────┘
         │
      ┌──┴──┬─────────┐
      ↓     ↓         ↓
   Email  Email    Analytics
   Admin  (User)   Tracking
```

---

## 🛠 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19.2.4, Next.js 16.1.6 |
| **Language** | TypeScript 5.7.3 |
| **Styling** | Tailwind CSS 4.2.0 |
| **Animations** | Framer Motion 12.0.0 |
| **Forms** | React Hook Form 7.54.1, Zod 3.24.1 |
| **Email** | Nodemailer 6.9.4 |
| **AI** | OpenAI API (gpt-4o-mini) |
| **Icons** | Lucide React 0.564.0 |
| **UI Components** | Radix UI, shadcn/ui |
| **Compiler** | Turbopack |

---

## 📧 Setting Up Email

### **Gmail (Recommended for testing)**
1. Enable 2-factor authentication
2. Create App Password: https://myaccount.google.com/app-passwords
3. Use as SMTP_PASSWORD
4. SMTP_USER = your Gmail address

### **SendGrid (Production)**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxx...
SMTP_SECURE=false
```

### **AWS SES (High Volume)**
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-iam-user
SMTP_PASSWORD=your-iam-password
SMTP_SECURE=false
```

---

## 🔗 Integration Examples

### **Zapier** (Easiest)
1. Create webhook trigger
2. Add to POST /api/contact callback
3. Actions: Google Sheets, Email, CRM, Slack

### **Discord Notifications**
```bash
# See CRM_INTEGRATION_GUIDE.md for full code
```

### **HubSpot CRM**
```bash
# See CRM_INTEGRATION_GUIDE.md for full code
```

### **Google Sheets**
```bash
# See CRM_INTEGRATION_GUIDE.md for full code
```

---

## 📈 Lead Priority System

### 🚀 HIGH Priority
- Detailed description (100+ words)
- Clear requirements
- Urgency indicators (ASAP, timeline, etc.)
- Positive tone
- Complex service needs
- **Response target:** 1 hour

### ⚡ MEDIUM Priority
- Standard details
- Clear but non-urgent
- Neutral tone
- **Response target:** 4 hours

### 📊 LOW Priority
- Vague description
- Generic message
- No urgency
- **Response target:** 24 hours

---

## ✅ Deployment Checklist

- [ ] All `.env.local` variables configured
- [ ] SMTP credentials tested
- [ ] OpenAI key added (optional but recommended)
- [ ] Run `npm run build` successfully
- [ ] Test form submission
- [ ] Verify email received
- [ ] Check priority badge displays
- [ ] Analytics endpoint responds
- [ ] No console errors

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **LEAD_GENERATION_SYSTEM.md** | Complete system guide, architecture, API reference |
| **CRM_INTEGRATION_GUIDE.md** | Integration recipes (Zapier, HubSpot, Discord, etc.) |
| **IMPLEMENTATION_SUMMARY.md** | What was built, next steps |
| **QUICK_REFERENCE.md** | Developer quick start, API endpoints |

---

## 🚨 Troubleshooting

### Email not received?
- Check SMTP credentials
- Verify email in spam folder
- Check Gmail "Less secure app access" is enabled
- Monitor Nodemailer logs

### AI analysis not showing?
- Verify OPENAI_API_KEY in .env.local
- Check OpenAI account has credits
- System falls back gracefully if unavailable

### Form showing errors?
- Verify all fields filled (name, phone, description required)
- Check browser console for network errors
- Ensure API is running on port 3000

### Analytics not updating?
- Verify `/api/lead-analytics` endpoint is deployed
- Check browser network tab for responses
- Confirm POST request is being sent

---

## 🎓 Next Steps

### **Phase 1: Verify (Today)**
```bash
npm run dev
# Test contact form
# Check email and badge
```

### **Phase 2: Extend (This Week)**
- Add Discord notifications (free)
- Set up Google Sheets export (free)
- Choose CRM integration

### **Phase 3: Optimize (Next Week)**
- Add database for persistent storage
- Create sales dashboard
- Implement follow-up sequences

### **Phase 4: Scale (Next Month)**
- SMS alerts for high-priority leads
- Full CRM integration
- Lead scoring customization

---

## 💡 Pro Tips

1. **Test with high-priority inquiry** to see full badge system
2. **Monitor OpenAI usage** at platform.openai.com
3. **Start with Zapier** for integrations (most flexible)
4. **Use Discord webhooks** for team notifications (free)
5. **Backup leads to Google Sheets** automatically

---

## 🤝 Support

For issues:
1. Check troubleshooting section
2. Review documentation files  
3. Check API response in browser console
4. Verify .env.local configuration

---

## 📞 Team

- **Ashwit Sharma** - Founder & Growth Lead
- **Asheesh Madhesia** - Creative Director
- **Aditya Pandey** - Director of Software Development

---

## 📄 License

This project is proprietary to BrandMatrix Digital Marketing.

---

## 🎯 Current Status

✅ **Production Ready**

- Lead capture: Active
- Email system: Active
- AI analysis: Active
- Analytics tracking: Active
- Build: Clean (0 errors)
- Performance: Optimized

---

**Last Updated:** 2024
**System Version:** 1.0 (AI-Powered Lead Generation)

**Start generating qualified leads now! 🚀**
