-- Create Accounts table
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  providerAccountId VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT
);

-- Create Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  sessionToken VARCHAR(255) NOT NULL,
  userId INTEGER NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL
);


-- Create Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  emailVerified TIMESTAMP WITH TIME ZONE,
  image TEXT,
  role VARCHAR(50)
);

-- Create Verification Token table
CREATE TABLE verification_token (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Create indexes for faster queries
CREATE INDEX idx_accounts_userId ON accounts(userId);
CREATE INDEX idx_accounts_providerAccountId ON accounts(providerAccountId);
CREATE INDEX idx_sessions_sessionToken ON sessions(sessionToken);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_verification_token_token ON verification_token(token);
CREATE INDEX idx_books_isbn ON books(isbn);
CREATE INDEX idx_teachers_email ON teachers(email);
CREATE INDEX idx_schedules_teacher_id ON schedules(teacher_id);
CREATE INDEX idx_schedules_subject_id ON schedules(subject_id);

-- Add foreign key constraints
ALTER TABLE accounts ADD CONSTRAINT fk_accounts_user FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE sessions ADD CONSTRAINT fk_sessions_user FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE;
