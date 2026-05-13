-- CAREFLOW OS Demo Requests Database Schema
-- D1 Database Table for storing demo request submissions

CREATE TABLE IF NOT EXISTS demo_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  caregiver_count TEXT,
  staffing_challenges TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);

-- Optional: Create a table for tracking email delivery status
CREATE TABLE IF NOT EXISTS email_notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  demo_request_id INTEGER NOT NULL,
  email_to TEXT NOT NULL,
  status TEXT NOT NULL, -- 'sent', 'failed', 'pending'
  error_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (demo_request_id) REFERENCES demo_requests (id),
  INDEX idx_demo_request_id (demo_request_id),
  INDEX idx_status (status)
);
