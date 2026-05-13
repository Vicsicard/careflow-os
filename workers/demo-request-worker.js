// Cloudflare Worker for CAREFLOW OS Demo Requests
// Deploy to: api.careflowos.com/demo-request

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return handleCORS();
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();
      
      // Validate required fields
      const { full_name, email, phone, caregiver_count, staffing_challenges } = body;
      
      if (!full_name || !email || !phone || !caregiver_count) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { 
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        );
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { 
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        );
      }
      
      // Sanitize inputs
      const sanitizedData = {
        full_name: full_name.trim().slice(0, 100),
        email: email.trim().toLowerCase().slice(0, 255),
        phone: phone.trim().slice(0, 20),
        caregiver_count: caregiver_count.trim().slice(0, 50),
        staffing_challenges: staffing_challenges ? staffing_challenges.trim().slice(0, 500) : ''
      };
      
      console.log('Demo request received:', {
        full_name: sanitizedData.full_name,
        email: sanitizedData.email,
        caregiver_count: sanitizedData.caregiver_count,
        staffing_challenges: sanitizedData.staffing_challenges
      });
      
      // Store in D1 database first
      const d1Result = await storeDemoRequest(env.DB, sanitizedData);
      console.log('D1 insert successful, ID:', d1Result?.meta?.last_row_id);
      
      // Send notification email (don't fail if email fails)
      const emailSent = await sendNotificationEmail(env, sanitizedData);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Demo request submitted successfully',
          id: d1Result?.meta?.last_row_id,
          email_sent: emailSent
        }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
      
    } catch (error) {
      console.error('Demo request error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    }
  }
};

function handleCORS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

async function storeDemoRequest(db, data) {
  try {
    const result = await db.prepare(`
      INSERT INTO demo_requests (full_name, email, phone, caregiver_count, staffing_challenges)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      data.full_name, 
      data.email, 
      data.phone, 
      data.caregiver_count, 
      data.staffing_challenges
    ).run();
    
    return result;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to store demo request');
  }
}

async function sendNotificationEmail(env, data) {
  try {
    console.log('Preparing SendGrid email...');
    
    // Parse recipients from comma-separated string
    const recipientString = env.NOTIFICATION_EMAIL || 'vic@getdigdev.com,vicsicard@gmail.com';
    const recipients = recipientString
      .split(',')
      .map(email => email.trim())
      .filter(email => email.length > 0);
    
    const fromEmail = env.SENDGRID_FROM_EMAIL || 'noreply@careflowos.com';
    
    console.log('Recipients:', recipients);
    console.log('From:', fromEmail);
    console.log('SendGrid API Key present:', !!env.SENDGRID_API_KEY);
    
    if (!env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is missing!');
      return false;
    }
    
    const emailHtml = generateEmailHtml(data);
    
    const requestBody = {
      personalizations: [{
        to: recipients.map(email => ({ email })),
      }],
      from: {
        email: fromEmail,
        name: 'CAREFLOW OS'
      },
      subject: 'New CAREFLOW OS Demo Request',
      content: [{
        type: 'text/html',
        value: emailHtml,
      }],
    };
    
    console.log('SendGrid request body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    
    console.log('SendGrid response status:', response.status);
    
    const responseText = await response.text();
    console.log('SendGrid response body:', responseText);
    
    if (!response.ok) {
      console.error('SendGrid email failed with status:', response.status);
      console.error('SendGrid error details:', responseText);
      return false;
    }
    
    console.log('SendGrid email sent successfully!');
    return true;
  } catch (error) {
    console.error('SendGrid email failure:', error);
    console.error('Error stack:', error.stack);
    // Don't throw error - email failure shouldn't break the demo request
    return false;
  }
}

function generateEmailHtml(data) {
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
