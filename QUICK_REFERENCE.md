# 🚀 Quick Reference Card

## API Endpoints

### POST /api/contact (Lead Submission)
```bash
curl -X POST http://localhost:3000/api/contact \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "phone": "+1-555-0123",
  "service": "Video Editing",
  "description": "I need a 60-second promo video"
}'
```

**Response:**
```json
{
  "ok": true,
  "message": "Request sent successfully.",
  "leadId": "lead_1703456789123",
  "analysis": {
    "priority": "high",
    "category": "video_production",
    "sentiment": "positive"
  }
}
```

---

### POST /api/lead-analytics (CRM Operations)

#### Get Dashboard Metrics
```bash
curl -X POST http://localhost:3000/api/lead-analytics \
-H "Content-Type: application/json" \
-d '{"action":"get-analytics"}'
```

#### Update Lead Status
```bash
curl -X POST http://localhost:3000/api/lead-analytics \
-H "Content-Type: application/json" \
-d '{
  "action":"update-status",
  "leadId":"lead_1703456789123",
  "status":"contacted"
}'
```

---

## Environment Variables

```env
# Required for SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_SECURE=false
CONTACT_EMAIL=ashwitsharma834@gmail.com

# Optional for AI
OPENAI_API_KEY=sk-proj-...
```

---

## File Structure

```
/app
  /api
    /contact/route.ts ........... Lead capture & AI analysis
    /lead-analytics/route.ts .... CRM tracking
    /chat/route.ts .............. Current chatbot

/components
  contact-form.tsx .............. Enhanced with lead badges
  
/LEAD_GENERATION_SYSTEM.md
/CRM_INTEGRATION_GUIDE.md
/IMPLEMENTATION_SUMMARY.md
```

---

## Lead Status Flow

```
new → contacted → qualified → won
                            ↘ lost
```

---

## Lead Priority Indicators

| Priority | Emoji | Color | Response Time |
|----------|-------|-------|----------------|
| HIGH | 🚀 | Red | 1 hour |
| MEDIUM | ⚡ | Orange | 4 hours |
| LOW | 📊 | Green | 24 hours |

---

## Sentiment Mapping

| Sentiment | Emoji | Meaning |
|-----------|-------|---------|
| positive | 😊 | Enthusiastic, ready to buy |
| neutral | 😐 | Standard inquiry |
| negative | 😟 | Problem or complaint |

---

## Quick Test Commands

```bash
# Test Email
npm run build

# Test Lead Submission
curl -X POST http://localhost:3000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"Test","phone":"123","description":"test"}'

# Get Analytics
curl -X POST http://localhost:3000/api/lead-analytics \
-H "Content-Type: application/json" \
-d '{"action":"get-analytics"}'
```

---

## Deployment Checklist

- [ ] All `.env.local` variables set
- [ ] SMTP test email sent successfully
- [ ] OpenAI key validated (optional)
- [ ] `npm run build` succeeds
- [ ] Contact form submission tested
- [ ] Email received in inbox
- [ ] Lead badge displays on site
- [ ] No errors in browser console

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/api/contact/route.ts` | Lead capture engine |
| `app/api/lead-analytics/route.ts` | Metrics & tracking |
| `components/contact-form.tsx` | Form UI + badges |
| `LEAD_GENERATION_SYSTEM.md` | Full documentation |
| `CRM_INTEGRATION_GUIDE.md` | Third-party integrations |

---

## Integration Quick Links

- **Zapier:** zapier.com/apps
- **HubSpot:** hubspot.com/integrations
- **Discord:** discord.com/developers
- **Supabase:** supabase.com
- **Twilio:** twilio.com

---

**Last Updated:** 2024
**Version:** 1.0
