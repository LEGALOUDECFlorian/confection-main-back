-- SQLBook: Code
BEGIN;


-- XXX Add DDLs here.
CREATE DOMAIN "zipcode_fr" AS TEXT
CHECK(
    VALUE ~ '^0[1-9]\d{3}$' -- code postaux metropole de 01 a 09
    OR VALUE ~ '^20[1-2]\d{2}$|^20300$' -- code postaux de la Corse
    OR VALUE ~ '^[13-8]\d{4}$' -- code postaux les plus génériques
    OR VALUE ~ '^9[0-6]\d{3}$' -- code postaux metropole commencant par 9
    OR VALUE ~ '^97[1-6]\d{2}$' -- code postaux DOM
    OR VALUE ~ '^98[4678]\d{2}$' -- code postaux TOM
    OR VALUE ~ '^9{5}$' -- code postal de la poste
);

CREATE DOMAIN "email" AS TEXT
CHECK(
    VALUE ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
);

CREATE DOMAIN "phone_number_fr" AS TEXT
CHECK(
    VALUE ~ '^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$'
);

CREATE TABLE "role" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "status" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "subcategory" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "workshop" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" email NOT NULL UNIQUE,
  "description" TEXT NOT NULL,
  "registration_number" TEXT NOT NULL, 
  "address" TEXT NOT NULL,
  "zipcode" zipcode_fr NOT NULL,
  "city" TEXT NOT NULL,
  "phone_number" phone_number_fr NOT NULL,
  "picture" TEXT NOT NULL DEFAULT '',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "lastname" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "email" email NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "zipcode" zipcode_fr NOT NULL,
  "city" TEXT NOT NULL,
  "phone_number" phone_number_fr NOT NULL,
  "role_id" INT NOT NULL REFERENCES"role"("id") DEFAULT 3,
  "workshop_id" INT REFERENCES"workshop"("id") DEFAULT null,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
); 

CREATE TABLE "item" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "picture" TEXT NOT NULL DEFAULT '',
  "price" NUMERIC(6, 2) NOT NULL,
  "material" TEXT NOT NULL,
  "customizable" BOOLEAN NOT NULL,
  "workshop_id" INT NOT NULL REFERENCES "workshop"("id"),
  "category_id" INT NOT NULL REFERENCES "category"("id"),
  "subcategory_id" INT NOT NULL REFERENCES "subcategory"("id"),
  "status_id" INT NOT NULL REFERENCES "status"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category_has_subcategory" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "category_id" INT NOT NULL REFERENCES "category"("id"),
  "subcategory_id" INT NOT NULL REFERENCES "subcategory"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE ("category_id", "subcategory_id")
);

COMMIT;
