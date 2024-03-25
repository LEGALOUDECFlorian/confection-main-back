-- SQLBook: Code
-- Revert confection-main:crud_function from pg

BEGIN;

  ----- ITEM -----
DROP FUNCTION update_item(json);

DROP FUNCTION create_item(json);

  ----- CATEGORY -----
DROP FUNCTION update_category(json);

DROP FUNCTION create_category(json);

  ----- USER -----
DROP FUNCTION update_user(json);

DROP FUNCTION create_user(json);

  ----- WORKSHOP -----
DROP FUNCTION update_workshop(json);

DROP FUNCTION create_workshop(json);

  ----- SUBCATEGORY -----
DROP FUNCTION update_subcategory(json);

DROP FUNCTION create_subcategory(json);

  ----- STATUS -----
DROP FUNCTION update_status(json);

DROP FUNCTION create_status(json);

  ----- ROLE -----
DROP FUNCTION update_role(json);

DROP FUNCTION create_role(json);

COMMIT;
