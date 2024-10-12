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
  date: string;
  lectures: Lecture[];
}

export interface Lecture {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  subject_name: string;
  teacher_name: string;
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
