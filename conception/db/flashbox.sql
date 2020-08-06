CREATE EXTENSION IF NOT EXISTS "uuid_ossp";

CREATE TABLE account
(
    account_id UUID PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(64)
);

CREATE TABLE category
(
    category_id UUID PRIMARY KEY,
    category_name VARCHAR(30),
    primary_color VARCHAR(7),
    secondary_color VARCHAR(7)
);

CREATE TABLE account_category
(
    account_category_id UUID PRIMARY KEY,
    account_id UUID,
    category_id UUID,
    FOREIGN KEY (account_id) REFERENCES account (account_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category (category_id) ON DELETE CASCADE
);

CREATE TABLE squad
(
    squad_id UUID PRIMARY KEY,
    squad_name VARCHAR(30),
    primary_color VARCHAR(7),
    secondary_color VARCHAR(7),
    FOREIGN KEY (category_id) REFERENCES category (category_id) ON DELETE CASCADE
);

CREATE TABLE card
(
    card_id UUID PRIMARY KEY,
    recto VARCHAR(100),
    verso VARCHAR(100),
    evaluation BIT,
    card_rank INTEGER,
    last_update TIME,
    FOREIGN KEY (squad_id) REFERENCES squad (squad_id) ON DELETE CASCADE
);
