export interface TableAccount {
  id: number;
  userId: number;
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
}

export interface TableBook {
  id: number;
  title: string;
  author: string | null;
  isbn: string | null;
  publication_year: number | null;
  subject: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface TableDatabaseMetric {
  id: number;
  query_time: number;
  row_count: number;
  timestamp: Date | null;
}

export interface TableLecture {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  room: string | null;
}

export interface TablePresence {
  id: number;
  user_id: number;
  lecture_id: number;
  is_present: boolean;
  created_at: Date | null;
}

export interface TableScheduleLecture {
  schedule_id: number;
  lecture_id: number;
}

export interface TableSchedule {
  id: number;
  date: string;
}

export interface TableSession {
  id: number;
  sessionToken: string;
  userId: number;
  expires: Date;
}

export interface TableSubject {
  id: number;
  name: string;
}

export interface TableTeacherSubject {
  teacher_id: number;
  subject_id: number;
}

export interface TableTeacher {
  id: number;
  name: string;
  email: string;
  subject_id: number | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface TableUser {
  id: number;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: string | null;
}

export interface TableVerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}
