-- SQLBook: Code
BEGIN;

-- XXX Add DDLs here.
DROP TABLE "item", "category", "user", "workshop", "subcategory", "status", "role", "category_has_subcategory" CASCADE;

DROP DOMAIN "phone_number_fr", "email", "zipcode_fr";

COMMIT;