# CAREFLOW OS Demo Modal Deployment Guide

## Overview
This guide covers deploying the complete demo modal system including the frontend modal, Cloudflare Worker API, D1 database, and SendGrid email notifications.

## Frontend (Vercel)

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel

### Environment Variables
Set these in Vercel dashboard under Project Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://api.careflowos.com
```

### Deployment
1. Push changes to GitHub
2. Vercel will automatically deploy
3. Verify the modal opens and submits successfully

## Backend (Cloudflare Workers)

### Prerequisites
- Cloudflare account
- SendGrid account with API key
- Domain configured for API (api.careflowos.com)

### Step 1: Create D1 Database
```bash
# Create D1 database
npx wrangler d1 create careflow-os-demo-requests

# Note the database ID and update wrangler.toml
```

### Step 2: Initialize Database Schema
```bash
# Apply schema to D1 database
npx wrangler d1 execute careflow-os-demo-requests --file=./database/schema.sql
```

### Step 3: Configure Environment Variables
Update `wrangler.toml` with your actual values:

```toml
[env.production.vars]
SENDGRID_API_KEY = "your_actual_sendgrid_api_key"
SENDGRID_FROM_EMAIL = "noreply@careflowos.com"
NOTIFICATION_EMAIL = "vic@getdigdev.com"

[[env.production.d1_databases]]
binding = "DB"
database_name = "careflow-os-demo-requests"
database_id = "your_actual_database_id"
```

### Step 4: Deploy Worker
```bash
# Deploy to Cloudflare Workers
npx wrangler deploy --env production
```

### Step 5: Configure Custom Domain
```bash
# Add custom domain for API
npx wrangler custom-domain add api.careflowos.com
```

## SendGrid Configuration

### Setup
1. Create SendGrid account
2. Verify your sender email/domain
3. Generate API key
4. Update environment variables

### Email Template
The worker automatically generates a professional HTML email with:
- CAREFLOW OS branding
- All form fields
- Timestamp
- Clean, modern design

## Testing

### Frontend Testing
1. Test modal opens from all CTA buttons
2. Test form validation
3. Test mobile responsiveness
4. Test success/error states

### Backend Testing
```bash
# Test API endpoint directly
curl -X POST https://api.careflowos.com/demo-request \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "caregiver_count": "6-15",
    "staffing_challenges": "Open shifts, No-shows"
  }'
```

### Database Testing
```bash
# Query D1 database
npx wrangler d1 execute careflow-os-demo-requests --command="SELECT * FROM demo_requests ORDER BY created_at DESC LIMIT 5"
```

## Monitoring

### Logs
```bash
# View Cloudflare Worker logs
npx wrangler tail --env production
```

### Email Delivery
- Check SendGrid dashboard for delivery status
- Monitor email bounces or failures

## Security Considerations

### CORS
- Worker handles CORS preflight requests
- Only allows POST requests to demo endpoint

### Input Validation
- Frontend: Required fields, email format validation
- Backend: Sanitization, length limits, SQL injection prevention

### Rate Limiting (Optional)
Add to Cloudflare Worker:
```javascript
// Add rate limiting using Cloudflare KV
const rateLimit = await env.RATE_LIMIT.get(clientIP);
if (rateLimit && parseInt(rateLimit) > 5) {
  return new Response('Too many requests', { status: 429 });
}
```

## Troubleshooting

### Common Issues

**Modal doesn't open:**
- Check DemoModalProvider is in layout.tsx
- Verify useDemoModal hook is imported
- Check browser console for errors

**API submission fails:**
- Check API URL in environment variables
- Verify Cloudflare Worker is deployed
- Check CORS headers
- Review worker logs

**Email not sending:**
- Verify SendGrid API key
- Check sender email is verified
- Review SendGrid dashboard
- Check worker logs for email errors

**Database not storing:**
- Verify D1 binding in wrangler.toml
- Check database ID is correct
- Review D1 logs
- Test schema application

### Debug Mode
For development, you can temporarily use the Next.js API route instead of Cloudflare Workers:

```typescript
// In api/demo-request/route.ts
// Set environment variable to use local API
process.env.USE_LOCAL_API = "true";
```

## Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] D1 database created and schema applied
- [ ] Cloudflare Worker deployed
- [ ] Custom domain configured
- [ ] SendGrid API key configured
- [ ] Environment variables set
- [ ] CORS headers working
- [ ] Form validation working
- [ ] Email notifications sending
- [ ] Database storing submissions
- [ ] Mobile responsive
- [ ] Error handling tested
- [ ] Monitoring configured

## Support

For issues:
1. Check this guide first
2. Review Cloudflare and Vercel logs
3. Test API endpoints directly
4. Verify environment variables
5. Check SendGrid dashboard
