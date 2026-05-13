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
      console.log('=== DEMO REQUEST RECEIVED ===');
      console.log('Request body:', JSON.stringify(body, null, 2));
      
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
    console.log('\n=== SENDGRID EMAIL PIPELINE START ===');
    console.log('Preparing SendGrid email...');
    
    // Parse recipients from comma-separated string
    const recipientString = env.NOTIFICATION_EMAIL || 'vic@getdigdev.com,vicsicard@gmail.com';
    console.log('Raw recipient string:', recipientString);
    
    const recipients = recipientString
      .split(',')
      .map(email => email.trim())
      .filter(email => email.length > 0);
    
    const fromEmail = env.SENDGRID_FROM_EMAIL || 'noreply@careflowos.com';
    
    console.log('Parsed recipients array:', JSON.stringify(recipients));
    console.log('From email:', fromEmail);
    console.log('SendGrid API Key present:', !!env.SENDGRID_API_KEY);
    console.log('SendGrid API Key length:', env.SENDGRID_API_KEY ? env.SENDGRID_API_KEY.length : 0);
    
    if (!env.SENDGRID_API_KEY) {
      console.error('❌ CRITICAL: SendGrid API key is missing!');
      return false;
    }
    
    if (env.SENDGRID_API_KEY === 'your_sendgrid_api_key_here') {
      console.error('❌ CRITICAL: SendGrid API key is still placeholder value!');
      return false;
    }
    
    const emailHtml = generateEmailHtml(data);
    console.log('Email HTML generated, length:', emailHtml.length);
    
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
    
    console.log('\n=== SENDGRID REQUEST PAYLOAD ===');
    console.log(JSON.stringify(requestBody, null, 2));
    console.log('\n=== SENDING TO SENDGRID API ===');
    
    const startTime = Date.now();
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const endTime = Date.now();
    
    console.log('\n=== SENDGRID RESPONSE ===');
    console.log('Response status:', response.status);
    console.log('Response status text:', response.statusText);
    console.log('Request duration:', endTime - startTime, 'ms');
    console.log('Response headers:', JSON.stringify(Object.fromEntries(response.headers)));
    
    const responseText = await response.text();
    console.log('Response body:', responseText || '(empty)');
    
    if (!response.ok) {
      console.error('\n❌ SENDGRID REQUEST FAILED');
      console.error('Status:', response.status);
      console.error('Status text:', response.statusText);
      console.error('Error details:', responseText);
      console.error('Recipients attempted:', JSON.stringify(recipients));
      console.error('From email:', fromEmail);
      return false;
    }
    
    console.log('\n✅ SENDGRID EMAIL SENT SUCCESSFULLY!');
    console.log('Recipients:', JSON.stringify(recipients));
    console.log('=== SENDGRID EMAIL PIPELINE END ===\n');
    return true;
  } catch (error) {
    console.error('\n❌ SENDGRID PIPELINE EXCEPTION');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error type:', error.constructor.name);
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
