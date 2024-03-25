-- Revert confection-main:create-view from pg

BEGIN;

DROP VIEW IF EXISTS user_with_workshop;
DROP VIEW IF EXISTS user_with_role;
DROP VIEW IF EXISTS users_by_role_view;
DROP VIEW IF EXISTS categories_with_subcategories;
DROP VIEW IF EXISTS subcategories_with_category;
DROP VIEW IF EXISTS subcategories_with_products;
DROP VIEW IF EXISTS categories_with_subcategory;
DROP VIEW IF EXISTS random_products_by_category;
DROP VIEW IF EXISTS products_with_subcategory_and_category;
DROP VIEW IF EXISTS item_information;
DROP VIEW IF EXISTS items_by_workshop;
DROP VIEW IF EXISTS latest_workshops;
DROP VIEW IF EXISTS random_items;



COMMIT;
