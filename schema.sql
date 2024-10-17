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

CREATE TABLE database_metrics (
  id integer NOT NULL PRIMARY KEY,
  query_time double precision NOT NULL,
  row_count integer NOT NULL,
  timestamp timestamp without time zone NULL
);

CREATE UNIQUE INDEX database_metrics_pkey ON public.database_metrics USING btree (id);

CREATE TABLE lectures (
  end_time time without time zone NOT NULL,
  id integer NOT NULL PRIMARY KEY,
  room character varying(50) NULL,
  start_time time without time zone NOT NULL,
  subject_id integer NULL REFERENCES subjects(id),
  teacher_id integer NULL REFERENCES teachers(id)
);

CREATE UNIQUE INDEX lectures_pkey ON public.lectures USING btree (id);

CREATE TABLE presences (
  created_at timestamp with time zone NULL,
  id integer NOT NULL PRIMARY KEY,
  is_present boolean NOT NULL,
  lecture_id integer NOT NULL REFERENCES lectures(id),
  user_id integer NOT NULL REFERENCES users(id)
);

CREATE UNIQUE INDEX presences_pkey ON public.presences USING btree (id);
CREATE INDEX idx_presences_user_lecture ON public.presences USING btree (user_id, lecture_id);

CREATE TABLE schedule_lectures (
  lecture_id integer NOT NULL PRIMARY KEY REFERENCES lectures(id),
  schedule_id integer NOT NULL PRIMARY KEY REFERENCES schedules(id)
);

CREATE UNIQUE INDEX schedule_lectures_pkey ON public.schedule_lectures USING btree (schedule_id, lecture_id);

CREATE TABLE schedules (
  date date NOT NULL,
  id integer NOT NULL PRIMARY KEY
);

CREATE UNIQUE INDEX schedules_pkey ON public.schedules USING btree (id);

CREATE TABLE sessions (
  expires timestamp with time zone NOT NULL,
  id integer NOT NULL PRIMARY KEY,
  sessionToken character varying(255) NOT NULL,
  userId integer NOT NULL
);

CREATE UNIQUE INDEX sessions_pkey ON public.sessions USING btree (id);

CREATE TABLE subjects (
  description text NULL,
  id integer NOT NULL PRIMARY KEY,
  name character varying(255) NOT NULL
);

CREATE UNIQUE INDEX subjects_pkey ON public.subjects USING btree (id);

CREATE TABLE teachers (
  email character varying(255) NOT NULL UNIQUE,
  id integer NOT NULL PRIMARY KEY,
  name character varying(255) NOT NULL
);

CREATE UNIQUE INDEX teachers_pkey ON public.teachers USING btree (id);
CREATE UNIQUE INDEX teachers_email_key ON public.teachers USING btree (email);

CREATE TABLE users (
  email character varying(255) NULL,
  emailVerified timestamp with time zone NULL,
  id integer NOT NULL PRIMARY KEY,
  image text NULL,
  name character varying(255) NULL,
  role character varying(50) NOT NULL
);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

CREATE TABLE verification_token (
  expires timestamp with time zone NOT NULL,
  identifier text NOT NULL PRIMARY KEY,
  token text NOT NULL PRIMARY KEY
);

CREATE UNIQUE INDEX verification_token_pkey ON public.verification_token USING btree (identifier, token);

