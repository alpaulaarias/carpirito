
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL, 
  email TEXT UNIQUE NOT NULL, 
  cedula VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

CREATE TABLE qr_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  code_text TEXT NOT NULL, 
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE, 
  device_info TEXT NOT NULL, 
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);


CREATE INDEX idx_attendance_user_created ON attendance(user_id, created_at);