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
-- Name: Banner; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Banner" (
    id integer NOT NULL,
    img text NOT NULL,
    link text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Banner" OWNER TO postgres;

--
-- Name: Banner_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Banner_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Banner_id_seq" OWNER TO postgres;

--
-- Name: Banner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Banner_id_seq" OWNED BY public."Banner".id;


--
-- Name: Category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    slug text NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Category" OWNER TO postgres;

--
-- Name: CategoryMetadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CategoryMetadata" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."CategoryMetadata" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Category_id_seq" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: MetadataValue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MetadataValue" (
    id text NOT NULL,
    label text NOT NULL,
    "categoryMetadataId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."MetadataValue" OWNER TO postgres;

--
-- Name: Order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Order" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    total double precision NOT NULL,
    "shippingCost" double precision DEFAULT 0 NOT NULL,
    "shippingDays" integer DEFAULT 0 NOT NULL,
    "shippingZipcode" text,
    "shippingStreet" text,
    "shippingNumber" text,
    "shippingCity" text,
    "shippingState" text,
    "shippingCountry" text,
    "shippingComplement" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Order" OWNER TO postgres;

--
-- Name: OrderProduct; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OrderProduct" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."OrderProduct" OWNER TO postgres;

--
-- Name: OrderProduct_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."OrderProduct_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."OrderProduct_id_seq" OWNER TO postgres;

--
-- Name: OrderProduct_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."OrderProduct_id_seq" OWNED BY public."OrderProduct".id;


--
-- Name: Order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Order_id_seq" OWNER TO postgres;

--
-- Name: Order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    label text NOT NULL,
    price double precision NOT NULL,
    description text,
    "categoryId" integer NOT NULL,
    "viewsCount" integer DEFAULT 0 NOT NULL,
    "salesCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- Name: ProductImage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProductImage" (
    id integer NOT NULL,
    "productId" integer NOT NULL,
    url text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ProductImage" OWNER TO postgres;

--
-- Name: ProductImage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ProductImage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProductImage_id_seq" OWNER TO postgres;

--
-- Name: ProductImage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ProductImage_id_seq" OWNED BY public."ProductImage".id;


--
-- Name: ProductMetadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProductMetadata" (
    id integer NOT NULL,
    "productId" integer NOT NULL,
    "categoryMetadataId" text NOT NULL,
    "metadataValueId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."ProductMetadata" OWNER TO postgres;

--
-- Name: ProductMetadata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ProductMetadata_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProductMetadata_id_seq" OWNER TO postgres;

--
-- Name: ProductMetadata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ProductMetadata_id_seq" OWNED BY public."ProductMetadata".id;


--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    token text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: UserAddress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserAddress" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "zipCode" text NOT NULL,
    street text NOT NULL,
    number text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    country text NOT NULL,
    complement text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."UserAddress" OWNER TO postgres;

--
-- Name: UserAddress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."UserAddress_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."UserAddress_id_seq" OWNER TO postgres;

--
-- Name: UserAddress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."UserAddress_id_seq" OWNED BY public."UserAddress".id;


--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


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
-- Name: Banner id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Banner" ALTER COLUMN id SET DEFAULT nextval('public."Banner_id_seq"'::regclass);


--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: Order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);


--
-- Name: OrderProduct id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderProduct" ALTER COLUMN id SET DEFAULT nextval('public."OrderProduct_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: ProductImage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductImage" ALTER COLUMN id SET DEFAULT nextval('public."ProductImage_id_seq"'::regclass);


--
-- Name: ProductMetadata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductMetadata" ALTER COLUMN id SET DEFAULT nextval('public."ProductMetadata_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: UserAddress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAddress" ALTER COLUMN id SET DEFAULT nextval('public."UserAddress_id_seq"'::regclass);


--
-- Data for Name: Banner; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Banner" (id, img, link, "createdAt", "updatedAt") FROM stdin;
1	fake_banner.svg	/categories/test	2025-08-14 19:48:51.032	2025-08-14 19:48:51.032
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Category" (id, slug, name, "createdAt", "updatedAt") FROM stdin;
1	camisas	Camisas	2025-08-14 19:49:11.744	2025-08-14 19:49:11.744
\.


--
-- Data for Name: CategoryMetadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CategoryMetadata" (id, name, "categoryId", "createdAt", "updatedAt") FROM stdin;
tech	Tecnologia	1	2025-08-14 19:49:31.57	2025-08-14 19:49:31.57
\.


--
-- Data for Name: MetadataValue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MetadataValue" (id, label, "categoryMetadataId", "createdAt", "updatedAt") FROM stdin;
node	Node	tech	2025-08-14 19:49:59.09	2025-08-14 19:49:59.09
react	React	tech	2025-08-14 19:50:10.989	2025-08-14 19:50:10.989
python	Python	tech	2025-08-14 19:50:26.005	2025-08-14 19:50:26.005
php	PHP	tech	2025-08-14 19:50:36.493	2025-08-14 19:50:36.493
\.


--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Order" (id, "userId", status, total, "shippingCost", "shippingDays", "shippingZipcode", "shippingStreet", "shippingNumber", "shippingCity", "shippingState", "shippingCountry", "shippingComplement", "createdAt", "updatedAt") FROM stdin;
1	1	pending	140	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:17:49.744	2025-08-17 01:17:49.744
2	1	pending	147	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:30:59.835	2025-08-17 01:30:59.835
3	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:31:49.153	2025-08-17 01:31:49.153
4	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:32:58.09	2025-08-17 01:32:58.09
5	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:33:15.373	2025-08-17 01:33:15.373
6	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:33:38.817	2025-08-17 01:33:38.817
7	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:37:04.451	2025-08-17 01:37:04.451
8	1	pending	206.9	7	3	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-17 01:40:58.968	2025-08-17 01:40:58.968
\.


--
-- Data for Name: OrderProduct; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OrderProduct" (id, "orderId", "productId", quantity, price, "createdAt", "updatedAt") FROM stdin;
1	1	1	2	70	2025-08-17 01:17:49.744	2025-08-17 01:17:49.744
2	2	1	2	70	2025-08-17 01:30:59.835	2025-08-17 01:30:59.835
3	3	1	2	70	2025-08-17 01:31:49.153	2025-08-17 01:31:49.153
4	3	2	1	59.9	2025-08-17 01:31:49.153	2025-08-17 01:31:49.153
5	4	1	2	70	2025-08-17 01:32:58.09	2025-08-17 01:32:58.09
6	4	2	1	59.9	2025-08-17 01:32:58.09	2025-08-17 01:32:58.09
7	5	1	2	70	2025-08-17 01:33:15.373	2025-08-17 01:33:15.373
8	5	2	1	59.9	2025-08-17 01:33:15.373	2025-08-17 01:33:15.373
9	6	1	2	70	2025-08-17 01:33:38.817	2025-08-17 01:33:38.817
10	6	2	1	59.9	2025-08-17 01:33:38.817	2025-08-17 01:33:38.817
11	7	1	2	70	2025-08-17 01:37:04.451	2025-08-17 01:37:04.451
12	7	2	1	59.9	2025-08-17 01:37:04.451	2025-08-17 01:37:04.451
13	8	1	2	70	2025-08-17 01:40:58.968	2025-08-17 01:40:58.968
14	8	2	1	59.9	2025-08-17 01:40:58.968	2025-08-17 01:40:58.968
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id, label, price, description, "categoryId", "viewsCount", "salesCount", "createdAt", "updatedAt") FROM stdin;
4	Camisa React	79.8	Descrição legal	1	0	4	2025-08-14 19:52:06.41	2025-08-14 19:52:06.41
5	Camisa Python	57.35	Camisa da cobra	1	0	5	2025-08-14 19:52:28.339	2025-08-14 19:52:28.339
1	Camisa PHP	70	Alguma coisa	1	2	0	2025-08-14 19:51:05.538	2025-08-15 00:26:29.609
3	Camisa RN	65	Mobile	1	1	0	2025-08-14 19:51:39.316	2025-08-15 00:26:40.121
2	Camisa JS	59.9	Outra desc	1	5	0	2025-08-14 19:51:25.014	2025-08-14 19:51:25.014
\.


--
-- Data for Name: ProductImage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProductImage" (id, "productId", url, "createdAt", "updatedAt") FROM stdin;
1	1	fake_product.svg	2025-08-14 19:52:53.015	2025-08-14 19:52:53.015
2	2	fake_product.svg	2025-08-14 19:52:58.275	2025-08-14 19:52:58.275
3	3	fake_product.svg	2025-08-14 19:53:02.935	2025-08-14 19:53:02.935
4	4	fake_product.svg	2025-08-14 19:53:07.648	2025-08-14 19:53:07.648
5	5	fake_product.svg	2025-08-14 19:53:13.396	2025-08-14 19:53:13.396
\.


--
-- Data for Name: ProductMetadata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProductMetadata" (id, "productId", "categoryMetadataId", "metadataValueId", "createdAt", "updatedAt") FROM stdin;
1	1	tech	php	2025-08-14 19:55:04.575	2025-08-14 19:55:04.575
2	3	tech	react	2025-08-14 19:56:25.753	2025-08-14 19:56:25.753
3	4	tech	react	2025-08-14 19:56:36.163	2025-08-14 19:56:36.163
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, password, token, "createdAt", "updatedAt") FROM stdin;
1	Nick	nick@email.com	$2b$10$2u2Lv88RCQLQN7sroLSo7uYQMtDL95FyYigw9INVXregmjxx30t9G	a603e823-751f-4f42-b1ed-6e29806fa3ac	2025-08-15 22:27:01.308	2025-08-16 22:00:32.78
\.


--
-- Data for Name: UserAddress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserAddress" (id, "userId", "zipCode", street, number, city, state, country, complement, "createdAt", "updatedAt") FROM stdin;
1	1	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-16 22:22:32.557	2025-08-16 22:22:32.557
2	1	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-16 22:22:52.288	2025-08-16 22:22:52.288
3	1	12345-678	Street Name	123	City	State	Country	Apt 1	2025-08-16 22:22:59.912	2025-08-16 22:22:59.912
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
20c53c7e-fdee-41e8-a7e0-83a89927fc16	766cb06d7a077fbffa1850e31565e5bd15ce43620e51e0f6ab1ccb64b66afd06	2025-08-14 19:48:15.458966-03	20250814224815_init	\N	\N	2025-08-14 19:48:15.409155-03	1
\.


--
-- Name: Banner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Banner_id_seq"', 1, true);


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Category_id_seq"', 1, true);


--
-- Name: OrderProduct_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."OrderProduct_id_seq"', 14, true);


--
-- Name: Order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Order_id_seq"', 8, true);


--
-- Name: ProductImage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ProductImage_id_seq"', 5, true);


--
-- Name: ProductMetadata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ProductMetadata_id_seq"', 3, true);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_id_seq"', 5, true);


--
-- Name: UserAddress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UserAddress_id_seq"', 3, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Banner Banner_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Banner"
    ADD CONSTRAINT "Banner_pkey" PRIMARY KEY (id);


--
-- Name: CategoryMetadata CategoryMetadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CategoryMetadata"
    ADD CONSTRAINT "CategoryMetadata_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: MetadataValue MetadataValue_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MetadataValue"
    ADD CONSTRAINT "MetadataValue_pkey" PRIMARY KEY (id);


--
-- Name: OrderProduct OrderProduct_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderProduct"
    ADD CONSTRAINT "OrderProduct_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: ProductImage ProductImage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductImage"
    ADD CONSTRAINT "ProductImage_pkey" PRIMARY KEY (id);


--
-- Name: ProductMetadata ProductMetadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductMetadata"
    ADD CONSTRAINT "ProductMetadata_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: UserAddress UserAddress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAddress"
    ADD CONSTRAINT "UserAddress_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


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
-- Name: CategoryMetadata CategoryMetadata_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CategoryMetadata"
    ADD CONSTRAINT "CategoryMetadata_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: MetadataValue MetadataValue_categoryMetadataId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MetadataValue"
    ADD CONSTRAINT "MetadataValue_categoryMetadataId_fkey" FOREIGN KEY ("categoryMetadataId") REFERENCES public."CategoryMetadata"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderProduct OrderProduct_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderProduct"
    ADD CONSTRAINT "OrderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderProduct OrderProduct_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderProduct"
    ADD CONSTRAINT "OrderProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductImage ProductImage_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductImage"
    ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductMetadata ProductMetadata_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductMetadata"
    ADD CONSTRAINT "ProductMetadata_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserAddress UserAddress_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAddress"
    ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

