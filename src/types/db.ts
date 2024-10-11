export interface User {
  id: number;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  role: "user" | "admin";
  image: string | null;
}

export interface Teacher {
  id: number;
  name: string;
  email: string;
  subject_id: number | null;
  subject_name?: string;
}

export interface Book {
  id: number;
  title: string;
  author: string | null;
  subject: string | null;
  isbn: string | null;
  publication_year: number | null;
  created_at: Date;
  updated_at: Date;
}

export interface Subject {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Schedule {
  id: number;
  subject_id: number;
  teacher_id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  room: string | null;
  created_at: Date;
  updated_at: Date;
}
