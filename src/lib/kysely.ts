import {
  Generated,
  ColumnType,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

type ISODateString =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

interface AccountsTable {
  id: Generated<number>;
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

interface DatabaseMetricsTable {
  id: Generated<number>;
  query_time: number;
  row_count: number;
  timestamp: ColumnType<Date, string | undefined, never>;
}

interface LecturesTable {
  id: Generated<number>;
  subject_id: number;
  teacher_id: number;
  schedule_id: number;
  start_time: string;
  end_time: string;
  room: string;
}

interface PresencesTable {
  id: Generated<number>;
  user_id: number;
  lecture_id: number;
  is_present: boolean;
  created_at: ColumnType<Date, string | undefined, never>;
}

interface SchedulesTable {
  id: Generated<number>;
  date: ISODateString;
}

interface SessionsTable {
  id: Generated<number>;
  sessionToken: string;
  userId: number;
  expires: ColumnType<Date, string, string>;
}

interface SubjectsTable {
  id: Generated<number>;
  name: string;
}

interface TeacherSubjectsTable {
  teacher_id: number;
  subject_id: number;
}

interface TeachersTable {
  id: Generated<number>;
  name: string;
  email: string;
}

interface UsersTable {
  id: Generated<number>;
  name: string | null;
  email: string | null;
  emailVerified: ColumnType<
    Date,
    string | undefined,
    string | undefined
  > | null;
  image: string | null;
  role: "user" | "admin";
}

interface VerificationTokenTable {
  identifier: string;
  token: string;
  expires: ColumnType<Date, string, string>;
}

export interface Database {
  accounts: AccountsTable;
  database_metrics: DatabaseMetricsTable;
  lectures: LecturesTable;
  presences: PresencesTable;
  schedules: SchedulesTable;
  sessions: SessionsTable;
  subjects: SubjectsTable;
  teacher_subjects: TeacherSubjectsTable;
  teachers: TeachersTable;
  users: UsersTable;
  verification_token: VerificationTokenTable;
}

export const db = createKysely<Database>();
export { sql } from "kysely";

export type TeacherWithSubjects = Teacher & { subjects: Subject[] };
export type ScheduleWithLectures = Schedule & { lectures: Lecture[] };

export type Subject = Selectable<SubjectsTable>;
export type NewSubject = Insertable<SubjectsTable>;
export type PersonSubject = Updateable<SubjectsTable>;

export type Teacher = Selectable<TeachersTable>;
export type NewTeacher = Insertable<TeachersTable>;
export type PersonTeacher = Updateable<TeachersTable>;

export type Schedule = Selectable<SchedulesTable>;
export type NewSchedule = Insertable<SchedulesTable>;
export type PersonSchedule = Updateable<SchedulesTable>;

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type PersonUser = Updateable<UsersTable>;

export type Lecture = Selectable<LecturesTable>;
export type NewLecture = Insertable<LecturesTable>;
export type PersonLecture = Updateable<LecturesTable>;
