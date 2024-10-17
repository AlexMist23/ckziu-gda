CREATE TABLE accounts (
  access_token text NULL,
  expires_at bigint NULL,
  id integer NOT NULL PRIMARY KEY,
  id_token text NULL,
  provider character varying(255) NOT NULL,
  providerAccountId character varying(255) NOT NULL,
  refresh_token text NULL,
  scope text NULL,
  session_state text NULL,
  token_type text NULL,
  type character varying(255) NOT NULL,
  userId integer NOT NULL
);

CREATE UNIQUE INDEX accounts_pkey ON public.accounts USING btree (id);

CREATE TABLE books (
  author character varying(255) NULL,
  created_at timestamp with time zone NULL,
  id integer NOT NULL PRIMARY KEY,
  isbn character varying(13) NULL,
  publication_year integer NULL,
  subject character varying(255) NULL,
  title character varying(255) NOT NULL,
  updated_at timestamp with time zone NULL
);

CREATE UNIQUE INDEX books_pkey ON public.books USING btree (id);

CREATE TABLE database_metrics (
  id integer NOT NULL PRIMARY KEY,
  query_time double precision NOT NULL,
  row_count integer NOT NULL,
  timestamp timestamp with time zone NULL
);

CREATE UNIQUE INDEX database_metrics_pkey ON public.database_metrics USING btree (id);

CREATE TABLE lectures (
  end_time time without time zone NOT NULL,
  id integer NOT NULL PRIMARY KEY,
  room character varying(50) NULL,
  start_time time without time zone NOT NULL,
  subject_id integer NOT NULL REFERENCES subjects(id),
  teacher_id integer NOT NULL REFERENCES teachers(id)
);

CREATE UNIQUE INDEX lectures_pkey ON public.lectures USING btree (id);
CREATE INDEX idx_lectures_subject_id ON public.lectures USING btree (subject_id);
CREATE INDEX idx_lectures_teacher_id ON public.lectures USING btree (teacher_id);

CREATE TABLE presences (
  created_at timestamp with time zone NULL,
  id integer NOT NULL PRIMARY KEY,
  is_present boolean NOT NULL,
  lecture_id integer NOT NULL UNIQUE REFERENCES lectures(id),
  lecture_id integer NOT NULL REFERENCES lectures(id),
  user_id integer NOT NULL REFERENCES users(id),
  user_id integer NOT NULL UNIQUE REFERENCES users(id)
);

CREATE UNIQUE INDEX presences_pkey ON public.presences USING btree (id);
CREATE UNIQUE INDEX presences_user_id_lecture_id_key ON public.presences USING btree (user_id, lecture_id);

CREATE TABLE schedule_lectures (
  lecture_id integer NOT NULL PRIMARY KEY REFERENCES lectures(id),
  lecture_id integer NOT NULL REFERENCES lectures(id),
  schedule_id integer NOT NULL PRIMARY KEY REFERENCES schedules(id),
  schedule_id integer NOT NULL REFERENCES schedules(id)
);

CREATE UNIQUE INDEX schedule_lectures_pkey ON public.schedule_lectures USING btree (schedule_id, lecture_id);
CREATE INDEX idx_schedule_lectures_schedule_id ON public.schedule_lectures USING btree (schedule_id);
CREATE INDEX idx_schedule_lectures_lecture_id ON public.schedule_lectures USING btree (lecture_id);

CREATE TABLE schedules (
  date date NOT NULL UNIQUE,
  id integer NOT NULL PRIMARY KEY
);

CREATE UNIQUE INDEX schedules_pkey ON public.schedules USING btree (id);
CREATE UNIQUE INDEX schedules_date_key ON public.schedules USING btree (date);

CREATE TABLE sessions (
  expires timestamp with time zone NOT NULL,
  id integer NOT NULL PRIMARY KEY,
  sessionToken character varying(255) NOT NULL,
  userId integer NOT NULL
);

CREATE UNIQUE INDEX sessions_pkey ON public.sessions USING btree (id);

CREATE TABLE subjects (
  id integer NOT NULL PRIMARY KEY,
  name character varying(255) NOT NULL UNIQUE
);

CREATE UNIQUE INDEX subjects_pkey ON public.subjects USING btree (id);
CREATE UNIQUE INDEX subjects_name_key ON public.subjects USING btree (name);

CREATE TABLE teacher_subjects (
  subject_id integer NOT NULL PRIMARY KEY REFERENCES subjects(id),
  subject_id integer NOT NULL REFERENCES subjects(id),
  teacher_id integer NOT NULL PRIMARY KEY REFERENCES teachers(id),
  teacher_id integer NOT NULL REFERENCES teachers(id)
);

CREATE UNIQUE INDEX teacher_subjects_pkey ON public.teacher_subjects USING btree (teacher_id, subject_id);

CREATE TABLE teachers (
  created_at timestamp with time zone NULL,
  email character varying(255) NOT NULL UNIQUE,
  id integer NOT NULL PRIMARY KEY,
  name character varying(255) NOT NULL,
  subject_id integer NULL REFERENCES subjects(id),
  updated_at timestamp with time zone NULL
);

CREATE UNIQUE INDEX teachers_pkey ON public.teachers USING btree (id);
CREATE UNIQUE INDEX teachers_email_key ON public.teachers USING btree (email);

CREATE TABLE users (
  email character varying(255) NULL,
  emailVerified timestamp with time zone NULL,
  id integer NOT NULL PRIMARY KEY,
  image text NULL,
  name character varying(255) NULL,
  role character varying(50) NULL
);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

CREATE TABLE verification_token (
  expires timestamp with time zone NOT NULL,
  identifier text NOT NULL PRIMARY KEY,
  token text NOT NULL PRIMARY KEY
);

CREATE UNIQUE INDEX verification_token_pkey ON public.verification_token USING btree (identifier, token);

