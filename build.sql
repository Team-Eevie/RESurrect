
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP TABLE IF EXISTS public.users CASCADE;
DROP TABLE IF EXISTS public.skills CASCADE;
DROP TABLE IF EXISTS public.experiences CASCADE;
DROP TABLE IF EXISTS public.bulletpoints CASCADE;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"pw" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.skills (
	"_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"entry" varchar NOT NULL,
	"hide" boolean NOT NULL,
	CONSTRAINT "skills_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.experiences (
	"_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"position" varchar NOT NULL,
	"company" varchar NOT NULL,
	"location" varchar, 
	"start_month" varchar,
	"start_year" varchar,
	"end_month" varchar,
	"end_year" varchar,
	"hide" boolean NOT NULL,
	CONSTRAINT "experiences_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.bulletpoints (
	"_id" serial NOT NULL,
	"experience_id" serial NOT NULL,
	"entry" varchar NOT NULL,
	"hide" boolean NOT NULL,
	CONSTRAINT "bulletpoints_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.skills ADD CONSTRAINT "skills_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("_id");

ALTER TABLE public.experiences ADD CONSTRAINT "experiences_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("_id");

ALTER TABLE public.bulletpoints ADD CONSTRAINT "bulletpoints_fk0" FOREIGN KEY ("experience_id") REFERENCES  public.experiences("_id");
