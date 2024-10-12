export interface User {
  id: number;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  role: "user" | "admin";
  image: string | null;
}

export interface Subject {
  id: number;
  name: string;
}

export interface Teacher {
  id: number;
  name: string;
  email: string;
  subjects: Subject[];
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

export interface Schedule {
  id: number;
  date: string; // Format: 'YYYY-MM-DD'
}

export interface Lecture {
  id: number;
  subject_id: number;
  teacher_id: number;
  room: string | null;
  start_time: "08:00" | "09:40" | "11:40" | "13:20" | "15:00";
  end_time: "09:30" | "11:10" | "13:10" | "14:50" | "16:30";
}

export interface ScheduleWithLectures extends Schedule {
  lectures: (Lecture & {
    subject_name: string;
    teacher_name: string;
  })[];
}

export interface Presence {
  id: number;
  user_id: number;
  lecture_id: number;
  is_present: boolean;
}
