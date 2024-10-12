import {
  TableSchedule,
  TableLecture,
  TableSubject,
  TableTeacher,
  TableUser,
  TablePresence,
  TableAccount,
  TableSession,
  TableDatabaseMetric,
  TableScheduleLecture,
  TableTeacherSubject,
  TableVerificationToken,
} from "./db";
export interface Teacher extends TableTeacher {
  subjects: number[];
}

export interface TeacherWithSubjects extends Omit<TableTeacher, "subject_id"> {
  subjects: TableSubject[];
}

export interface Schedule extends TableSchedule {
  lectures: Lecture[];
}

export interface Lecture extends TableLecture {
  subject: Subject;
  teacher: Teacher;
  presences: Presence[];
}

export type Subject = TableSubject;

export interface Teacher extends TableTeacher {
  subjects: Subject[];
  lectures: Lecture[];
}
export interface SimpleTeacher {
  id: number;
  name: string;
}
export interface User extends TableUser {
  accounts: Account[];
  sessions: Session[];
  presences: Presence[];
}

export interface Presence extends TablePresence {
  user: User;
  lecture: Lecture;
}

export interface Account extends TableAccount {
  user: User;
}

export interface Session extends TableSession {
  user: User;
}

export type DatabaseMetric = TableDatabaseMetric;

export interface ScheduleLecture extends TableScheduleLecture {
  schedule: Schedule;
  lecture: Lecture;
}

export interface TeacherSubject extends TableTeacherSubject {
  teacher: Teacher;
  subject: Subject;
}
export interface LectureWithNames extends TableLecture {
  subject_name: string;
  teacher_name: string;
}

export interface ScheduleWithLectures extends TableSchedule {
  lectures: LectureWithNames[];
}
export type VerificationToken = TableVerificationToken;

// Utility types
export type UserRole = "admin" | "user";

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface PresenceStatistics {
  totalLectures: number;
  attendedLectures: number;
  attendancePercentage: number;
}

export interface TeacherWithSubjects extends Omit<TableTeacher, "subject_id"> {
  subjects: TableSubject[];
}

export interface SubjectWithTeachers extends Subject {
  teachers: Teacher[];
}

export interface LectureWithPresences extends Lecture {
  presences: Presence[];
}

export interface ScheduleWithDetails extends Schedule {
  lectures: LectureWithPresences[];
}

export interface UserWithPresenceStatistics extends User {
  presenceStatistics: PresenceStatistics;
}
