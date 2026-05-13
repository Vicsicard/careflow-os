import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface DemoRequest {
  full_name: string;
  email: string;
  phone: string;
  caregiver_count: string;
  staffing_challenges: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { full_name, email, phone, caregiver_count, staffing_challenges } = body as DemoRequest;
    
    if (!full_name || !email || !phone || !caregiver_count) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData: DemoRequest = {
      full_name: full_name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 255),
      phone: phone.trim().slice(0, 20),
      caregiver_count: caregiver_count.trim().slice(0, 50),
      staffing_challenges: staffing_challenges ? staffing_challenges.trim().slice(0, 500) : ''
    };
    
    // Store in D1 database
    const d1Result = await storeDemoRequest(sanitizedData);
    
    // Send notification email
    await sendNotificationEmail(sanitizedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request submitted successfully',
        id: d1Result?.id 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function storeDemoRequest(data: DemoRequest) {
  // This would connect to your D1 database
  // For now, we'll simulate the response
  try {
    // In production, this would be:
    // const db = env.DB;
    // const result = await db.prepare(`
    //   INSERT INTO demo_requests (full_name, email, phone, caregiver_count, staffing_challenges)
    //   VALUES (?, ?, ?, ?, ?)
    // `).bind(data.full_name, data.email, data.phone, data.caregiver_count, data.staffing_challenges).run();
    // return result;
    
    console.log('Storing demo request:', data);
    return { id: Math.floor(Math.random() * 1000000) }; // Mock ID
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to store demo request');
  }
}

async function sendNotificationEmail(data: DemoRequest) {
  try {
    const emailContent = {
      to: process.env.NOTIFICATION_EMAIL || 'vic@getdigdev.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@careflowos.com',
      subject: 'New CAREFLOW OS Demo Request',
      html: generateEmailHtml(data)
    };
    
    // In production, this would use SendGrid API
    console.log('Sending email notification:', emailContent);
    
    // Mock email sending for now
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{
    //       to: [{ email: emailContent.to }],
    //       subject: emailContent.subject,
    //     }],
    //     from: { email: emailContent.from },
    //     content: [{
    //       type: 'text/html',
    //       value: emailContent.html,
    //     }],
    //   }),
    // });
    
    return true;
  } catch (error) {
    console.error('Email error:', error);
    // Don't throw error - email failure shouldn't break the demo request
    return false;
  }
}

function generateEmailHtml(data: DemoRequest): string {
  const timestamp = new Date().toLocaleString();
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New CAREFLOW OS Demo Request</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #0891b2); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #475569; margin-bottom: 5px; }
        .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New CAREFLOW OS Demo Request</h1>
          <p>A potential customer has requested a demo</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${data.full_name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${data.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Caregiver Count</div>
            <div class="value">${data.caregiver_count}</div>
          </div>
          
          <div class="field">
            <div class="label">Staffing Challenges</div>
            <div class="value">${data.staffing_challenges || 'None specified'}</div>
          </div>
          
          <div class="field">
            <div class="label">Submission Time</div>
            <div class="value">${timestamp}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This notification was sent automatically from CAREFLOW OS</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
