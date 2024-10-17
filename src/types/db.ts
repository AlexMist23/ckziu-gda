export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: string;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
};

export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Date;
};

export type Teacher = {
  id: number;
  name: string;
  email: string;
};

export type Subject = {
  id: number;
  name: string;
  description: string | null;
};

export type Schedule = {
  id: number;
  date: Date;
};

export type Lecture = {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string; // Using string for time, adjust if using a different type
  end_time: string;
  room: string | null;
};

export type ScheduleLecture = {
  schedule_id: number;
  lecture_id: number;
};

export type Presence = {
  id: number;
  user_id: string;
  lecture_id: number;
  is_present: boolean;
};

export type TeacherSubject = {
  teacher_id: number;
  subject_id: number;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publication_year: number;
  description: string | null;
};

export type DatabaseMetric = {
  id: number;
  timestamp: Date;
  query_time: number;
  row_count: number;
};
