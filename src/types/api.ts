import {
  DatabaseMetric,
  SimpleTeacher,
  Presence,
  Subject,
  User,
  TeacherWithSubjects,
} from "./types";

// API request interfaces

export interface LectureResponse {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  room: string | null;
  subject: Subject;
  teacher: SimpleTeacher;
}

export interface ScheduleResponse {
  id: number;
  date: string;
  lectures: LectureResponse[];
}

export interface CreateScheduleRequest {
  date: string;
  lectures: {
    subject_id: number;
    teacher_id: number;
    start_time: string;
    end_time: string;
    room: string | null;
  }[];
}

export interface UpdateScheduleRequest {
  date: string;
  lectures: {
    id?: number;
    subject_id: number;
    teacher_id: number;
    start_time: string;
    end_time: string;
    room: string | null;
  }[];
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface SchedulesListResponse {
  data: ScheduleResponse[];
  pagination: PaginationInfo;
}

export interface CreateTeacherRequest {
  name: string;
  email: string;
  subject_ids: number[];
}
export interface LectureResponse {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  room: string | null;
  subject: Subject;
  teacher: SimpleTeacher;
}
export interface UpdateTeacherRequest {
  name?: string;
  email?: string;
  subject_ids?: number[];
}

export interface CreateBookRequest {
  title: string;
  author?: string;
  isbn?: string;
  publication_year?: number;
  subject?: string;
}

export interface UpdateBookRequest {
  title?: string;
  author?: string;
  isbn?: string;
  publication_year?: number;
  subject?: string;
}

export interface CreateLectureRequest {
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  room: string | null;
}

export interface UpdateLectureRequest {
  subject_id?: number;
  teacher_id?: number;
  start_time?: string;
  end_time?: string;
  room?: string;
}

export interface CreatePresenceRequest {
  user_id: number;
  lecture_id: number;
  is_present: boolean;
}

export interface UpdatePresenceRequest {
  is_present: boolean;
}

export interface LecturesListResponse {
  data: LectureResponse[];
  pagination: PaginationInfo;
}

// API response interfaces

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export type TeacherResponse = TeacherWithSubjects;
export type TeachersListResponse = PaginatedResponse<TeacherResponse>;

export interface LectureResponse {
  id: number;
  subject_id: number;
  teacher_id: number;
  start_time: string;
  end_time: string;
  room: string | null;
  subject: Subject;
  teacher: SimpleTeacher;
}
export interface UpdateScheduleRequest {
  date: string;
  lectures: {
    id?: number;
    subject_id: number;
    teacher_id: number;
    start_time: string;
    end_time: string;
    room: string | null;
  }[];
}
export interface ScheduleResponse {
  id: number;
  date: string;
  lectures: LectureResponse[];
}

export type SubjectResponse = Subject;
export type SubjectsListResponse = PaginatedResponse<SubjectResponse>;

export type UserResponse = User;
export type UsersListResponse = PaginatedResponse<UserResponse>;

export type PresenceResponse = Presence & {
  user: User;
  lecture: LectureResponse;
};
export type PresencesListResponse = PaginatedResponse<PresenceResponse>;

export type DatabaseMetricResponse = DatabaseMetric;
export type DatabaseMetricsListResponse =
  PaginatedResponse<DatabaseMetricResponse>;
