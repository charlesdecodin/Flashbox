CREATE EXTENSION IF NOT EXISTS "uuid_ossp";

CREATE TABLE account
(
    account_id UUID PRIMARY KEY, 
    first_name varchar(30),
    last_name varchar(30),
    email varchar(100) UNIQUE NOT NULL,
    password varchar(64)
);