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
-- Name: drizzle; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA drizzle;


ALTER SCHEMA drizzle OWNER TO postgres;

--
-- Name: move_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.move_type AS ENUM (
    'in',
    'out'
);


ALTER TYPE public.move_type OWNER TO postgres;

--
-- Name: unit_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.unit_type AS ENUM (
    'kg',
    'g',
    'l',
    'ml',
    'un'
);


ALTER TYPE public.unit_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: __drizzle_migrations; Type: TABLE; Schema: drizzle; Owner: postgres
--

CREATE TABLE drizzle.__drizzle_migrations (
    id integer NOT NULL,
    hash text NOT NULL,
    created_at bigint
);


ALTER TABLE drizzle.__drizzle_migrations OWNER TO postgres;

--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE; Schema: drizzle; Owner: postgres
--

CREATE SEQUENCE drizzle.__drizzle_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNER TO postgres;

--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: drizzle; Owner: postgres
--

ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNED BY drizzle.__drizzle_migrations.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: moves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moves (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    product_id uuid NOT NULL,
    user_id uuid NOT NULL,
    move_type public.move_type NOT NULL,
    quantity numeric NOT NULL,
    unit_price integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.moves OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    category_id uuid NOT NULL,
    unit_price integer NOT NULL,
    unit_type public.unit_type DEFAULT 'un'::public.unit_type NOT NULL,
    quantity numeric DEFAULT '0'::numeric NOT NULL,
    minimum_quantity numeric DEFAULT '0'::numeric NOT NULL,
    maximum_quantity numeric DEFAULT '0'::numeric NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    avatar text,
    is_admin boolean DEFAULT false NOT NULL,
    token text,
    deleted_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: __drizzle_migrations id; Type: DEFAULT; Schema: drizzle; Owner: postgres
--

ALTER TABLE ONLY drizzle.__drizzle_migrations ALTER COLUMN id SET DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass);


--
-- Data for Name: __drizzle_migrations; Type: TABLE DATA; Schema: drizzle; Owner: postgres
--

COPY drizzle.__drizzle_migrations (id, hash, created_at) FROM stdin;
1	db8961919177d388a74d7b80bc4ef70b697040ea243370c9ca78412456d2b4e9	1768680282201
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, deleted_at, created_at, updated_at) FROM stdin;
8e0938ad-1ff3-4fd2-9a91-3f137e3ff80c	Eletrônicos	\N	2026-01-21 17:12:57.118505	2026-01-21 17:12:57.118505
89a3b6ac-0035-4b12-afba-00654ba76e32	Brinquedos	2026-01-22 00:22:18.775	2026-01-21 17:13:04.721832	2026-01-21 23:04:24.532
\.


--
-- Data for Name: moves; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moves (id, product_id, user_id, move_type, quantity, unit_price, created_at) FROM stdin;
d673fd7d-9395-43bc-b27d-58ca38ce915c	744d4f9c-3ebc-4e80-8589-82d1e4851a88	57ac73c4-85b1-491e-b622-8b5510679eba	in	17	30	2026-01-23 23:55:10.610667
5b9aa4bc-eb6c-41f2-98a3-324fe4f89f3b	744d4f9c-3ebc-4e80-8589-82d1e4851a88	57ac73c4-85b1-491e-b622-8b5510679eba	out	3	30	2026-01-23 23:55:19.338294
389c416e-4788-4bba-8ba7-e081dcd13da9	744d4f9c-3ebc-4e80-8589-82d1e4851a88	57ac73c4-85b1-491e-b622-8b5510679eba	in	1	30	2026-01-23 23:55:30.213729
d9a2e9d1-df14-4f18-b7a9-e1ffd443ff05	744d4f9c-3ebc-4e80-8589-82d1e4851a88	57ac73c4-85b1-491e-b622-8b5510679eba	out	5	30	2026-01-22 23:55:40.427582
3d542dd4-d107-4305-aa80-9649c7b701c8	744d4f9c-3ebc-4e80-8589-82d1e4851a88	57ac73c4-85b1-491e-b622-8b5510679eba	in	5	30	2026-01-24 00:08:58.261006
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, category_id, unit_price, unit_type, quantity, minimum_quantity, maximum_quantity, deleted_at, created_at, updated_at) FROM stdin;
d82257b8-55c4-4bc8-b163-667ea6f47aed	Teclado XYZ	8e0938ad-1ff3-4fd2-9a91-3f137e3ff80c	120	un	0	0	0	2026-01-23 00:55:08.434	2026-01-21 21:49:21.424318	2026-01-23 00:51:30.869
b6e277fd-2916-4bf0-9f81-690704ae3cf7	Teclado XYZ	8e0938ad-1ff3-4fd2-9a91-3f137e3ff80c	120	un	0	3	15	\N	2026-01-22 21:55:46.753439	2026-01-22 21:55:46.753439
744d4f9c-3ebc-4e80-8589-82d1e4851a88	Mouse XYZ	8e0938ad-1ff3-4fd2-9a91-3f137e3ff80c	30	un	25	20	50	\N	2026-01-22 21:56:12.859718	2026-01-24 03:08:58.263
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, avatar, is_admin, token, deleted_at, created_at, updated_at) FROM stdin;
57ac73c4-85b1-491e-b622-8b5510679eba	Nick	nick@email.com	$2b$10$Xiayf3jjN/Ku1Ym0Neibpu.i/TETZrq9jFQTLKeaG30NdvR4x5m72	\N	t	66f07595013ad7a0da53e7fc8bbfa24672c896bd4b02e55346cecfb0dbf230c0	\N	2026-01-17 18:49:10.33133	2026-01-20 00:46:44.775
32ea9d72-735c-46a1-a042-6dd98ab9de72	James	james@email.com	$2b$10$5/qihjONcIGOuLoZKtqX8ObB4Vg69Jnhz9QK0Y0aXtC4xoTv9WHJa	\N	f	\N	2026-01-20 21:42:00.456	2026-01-20 18:40:11.924764	2026-01-20 21:42:00.456
4959f7c1-7cb3-4ef6-a811-d4989446739b	Jaiminho	jaiminho@email.com	$2b$10$PxhHlpsWZ0PVrXX1tKKIQ.9zldWroIfw58l//Z23sRFBXJ878HUQW	260335_1.jpg	f	\N	\N	2026-01-20 19:23:55.436091	2026-01-20 23:22:46.538
\.


--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE SET; Schema: drizzle; Owner: postgres
--

SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 1, true);


--
-- Name: __drizzle_migrations __drizzle_migrations_pkey; Type: CONSTRAINT; Schema: drizzle; Owner: postgres
--

ALTER TABLE ONLY drizzle.__drizzle_migrations
    ADD CONSTRAINT __drizzle_migrations_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: moves moves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: moves moves_product_id_products_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_product_id_products_id_fk FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: moves moves_user_id_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_user_id_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: products products_category_id_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_categories_id_fk FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

