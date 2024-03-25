-- SQLBook: Code
BEGIN;

SELECT * FROM "role" WHERE false;
SELECT * FROM "status" WHERE false;
SELECT * FROM "subcategory" WHERE false;
SELECT * FROM "workshop" WHERE false;
SELECT * FROM "user" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "item" WHERE false;
SELECT * FROM "category_has_subcategory" WHERE false;

ROLLBACK;