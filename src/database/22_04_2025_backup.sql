PGDMP                       }            cadastro    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16387    cadastro    DATABASE     n   CREATE DATABASE cadastro WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE cadastro;
                     postgres    false            �            1259    16398    posts    TABLE     }   CREATE TABLE public.posts (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    conteudo text NOT NULL
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16397    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220            �           0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16389    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16388    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218                        0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            ]           2604    16401    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            \           2604    16392    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    16398    posts 
   TABLE DATA           3   COPY public.posts (id, name, conteudo) FROM stdin;
    public               postgres    false    220   �       �          0    16389    users 
   TABLE DATA           0   COPY public.users (id, name, email) FROM stdin;
    public               postgres    false    218   3                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 6, true);
          public               postgres    false    219                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public               postgres    false    217            c           2606    16405    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            _           2606    16396    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public                 postgres    false    218            a           2606    16394    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            �   h   x�E̻�0E�ڞ" ���A�h,b�8($�O�О�tK�+y��vO0��a��9��	k%��%]�/RKy�)8la���x������f��I��@�e;,|      �   �   x�U�K�0CדS�#�]S6H n�ƤQ��̨A����E�ؒ�l���"u�\��^t����G��ޢ[S�h�y<�
n�$V�
�=�iE��Fh��}�c������aV�P���t	E�����Zo�{c�DG     