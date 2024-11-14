--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.1

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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Follow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Follow" (
    id integer NOT NULL,
    "user1Slug" text NOT NULL,
    "user2Slug" text NOT NULL
);


ALTER TABLE public."Follow" OWNER TO postgres;

--
-- Name: Follow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Follow_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Follow_id_seq" OWNER TO postgres;

--
-- Name: Follow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Follow_id_seq" OWNED BY public."Follow".id;


--
-- Name: Trend; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Trend" (
    id integer NOT NULL,
    hashtag text NOT NULL,
    counter integer DEFAULT 1 NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Trend" OWNER TO postgres;

--
-- Name: Trend_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Trend_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Trend_id_seq" OWNER TO postgres;

--
-- Name: Trend_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Trend_id_seq" OWNED BY public."Trend".id;


--
-- Name: Tweet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tweet" (
    id integer NOT NULL,
    "userSlug" text NOT NULL,
    body text NOT NULL,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "answerOf" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Tweet" OWNER TO postgres;

--
-- Name: TweetLike; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TweetLike" (
    id integer NOT NULL,
    "userSlug" text NOT NULL,
    "tweetId" integer NOT NULL
);


ALTER TABLE public."TweetLike" OWNER TO postgres;

--
-- Name: TweetLike_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."TweetLike_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."TweetLike_id_seq" OWNER TO postgres;

--
-- Name: TweetLike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."TweetLike_id_seq" OWNED BY public."TweetLike".id;


--
-- Name: Tweet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tweet_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tweet_id_seq" OWNER TO postgres;

--
-- Name: Tweet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tweet_id_seq" OWNED BY public."Tweet".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    slug text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    avatar text DEFAULT 'default.jpg'::text NOT NULL,
    cover text DEFAULT 'default.jpg'::text NOT NULL,
    bio text,
    link text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Follow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Follow" ALTER COLUMN id SET DEFAULT nextval('public."Follow_id_seq"'::regclass);


--
-- Name: Trend id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trend" ALTER COLUMN id SET DEFAULT nextval('public."Trend_id_seq"'::regclass);


--
-- Name: Tweet id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tweet" ALTER COLUMN id SET DEFAULT nextval('public."Tweet_id_seq"'::regclass);


--
-- Name: TweetLike id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TweetLike" ALTER COLUMN id SET DEFAULT nextval('public."TweetLike_id_seq"'::regclass);


--
-- Data for Name: Follow; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Follow" (id, "user1Slug", "user2Slug") FROM stdin;
11	nick	james
\.


--
-- Data for Name: Trend; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Trend" (id, hashtag, counter, "updatedAt") FROM stdin;
1	#ok	2	2024-10-02 18:08:57.375
2	#Node	1	2024-10-02 18:08:57.379
\.


--
-- Data for Name: Tweet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tweet" (id, "userSlug", body, image, "createdAt", "answerOf") FROM stdin;
14	nick	Tweet	\N	2024-10-02 19:13:43.33	0
15	nick	Resposta tweet 14	\N	2024-10-02 19:15:38.78	14
16	nick	Tweet test	\N	2024-10-02 21:42:53.179	0
17	nick	Mais um tweet	\N	2024-10-02 21:43:01.663	0
18	nick	Tweet enviado	\N	2024-10-02 21:43:09.041	0
19	james	Tweet enviado	\N	2024-10-03 00:15:26.309	0
20	nick	Enviando para consultar o feed	\N	2024-10-03 00:17:10.27	0
\.


--
-- Data for Name: TweetLike; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."TweetLike" (id, "userSlug", "tweetId") FROM stdin;
3	nick	14
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (slug, email, password, name, avatar, cover, bio, link) FROM stdin;
james	james@email.com	$2a$10$RoyFauXXw4UP2NXMqm1J5OGJzAGQsSJI5Co.1EmyMlde6IhFTh27K	James	default.jpg	default.jpg	\N	\N
tonhao	tonhao@email.com	$2a$10$3nRmw6P5NSE9Rxn2NCd0OeamRXRDgaNx0df61CnBpK9Bt6z5bo1TW	Tonhao	default.jpg	default.jpg	\N	\N
tonhaozinho	tonhaozinho@email.com	$2a$10$Xg21lzmYIbSzJI6hsl5fGOV9AWtgldWwDGlEGpsp8kZWDes4HSMc6	Tonhaozinho	default.jpg	default.jpg	\N	\N
nick	nick@email.com	$2a$10$M/sIDnx.NC.PPEaw0sbKcuiuiAS6wY4zXuiuHXgiqhkFUhhlast7S	Nick	image.jpg	default.jpg	Desenvolvedor	https://site.com
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
609cb23d-5047-46c6-a811-f88d9d908d28	9706ae67fd6404ec04ae84f9b252aabd16054114ec6803677fef498ba89adb18	2024-09-27 23:35:47.154449-03	20240928023547_init	\N	\N	2024-09-27 23:35:47.135213-03	1
\.


--
-- Name: Follow_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Follow_id_seq"', 11, true);


--
-- Name: Trend_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Trend_id_seq"', 2, true);


--
-- Name: TweetLike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."TweetLike_id_seq"', 3, true);


--
-- Name: Tweet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tweet_id_seq"', 20, true);


--
-- Name: Follow Follow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Follow"
    ADD CONSTRAINT "Follow_pkey" PRIMARY KEY (id);


--
-- Name: Trend Trend_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trend"
    ADD CONSTRAINT "Trend_pkey" PRIMARY KEY (id);


--
-- Name: TweetLike TweetLike_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TweetLike"
    ADD CONSTRAINT "TweetLike_pkey" PRIMARY KEY (id);


--
-- Name: Tweet Tweet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tweet"
    ADD CONSTRAINT "Tweet_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (slug);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: TweetLike TweetLike_tweetId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TweetLike"
    ADD CONSTRAINT "TweetLike_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES public."Tweet"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: TweetLike TweetLike_userSlug_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TweetLike"
    ADD CONSTRAINT "TweetLike_userSlug_fkey" FOREIGN KEY ("userSlug") REFERENCES public."User"(slug) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Tweet Tweet_userSlug_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tweet"
    ADD CONSTRAINT "Tweet_userSlug_fkey" FOREIGN KEY ("userSlug") REFERENCES public."User"(slug) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

