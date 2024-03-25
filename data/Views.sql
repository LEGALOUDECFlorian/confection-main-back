-- SQLBook: Code
-- Deploy confection-main:create-view to pg

BEGIN;

-- récupération d'un utilisateur et des information de son espace créateur --
CREATE OR REPLACE VIEW user_with_workshop AS
SELECT 
    "user"."id" AS "user_id",
    "user"."lastname" AS "user_lastname",
    "user"."firstname" AS "user_firstname",
    "user"."email" AS "user_email",
	"user"."address" AS "user_address",
	"user"."zipcode" AS "user_zipcode",
	"user"."city" AS "user_city",
    "user"."phone_number" AS "user_phone_number",
    "workshop"."id" AS "workshop_id",
    "workshop"."name" AS "workshop_name",
	"workshop"."email" AS "workshop_email",
	"workshop"."description" AS "workshop_description",
	"workshop"."registration_number" AS "registration_number",
	"workshop"."address" AS "workshop_address",
	"workshop"."zipcode" AS "workshop_zipcode",
	"workshop"."city" AS "workshop_city",
    "workshop"."phone_number" AS "workshop_phone_number",
	"workshop"."picture" AS "workshop_picture"
FROM 
    "user"
LEFT JOIN 
    "workshop" ON "user"."workshop_id" = "workshop"."id";


-- récupération d'un utilisateur par son email --

CREATE OR REPLACE VIEW user_with_role AS
SELECT 
    "user"."id" ,
    "user"."lastname",
    "user"."firstname",
    "user"."email",
    "user"."password",
    "role"."name" AS "role"
FROM 
    "user"
JOIN 
    "role" ON "role"."id" = "user"."role_id";

-- récupération des utilisateurs par leurs role --

CREATE OR REPLACE VIEW users_by_role_view AS
SELECT 
    
  "user"."id" AS "user_id",
  "user"."lastname" AS "user_lastnames",
  "user"."firstname" AS "user_firstnames",
  "user"."email" AS "user_emails",
  "role"."name" AS "role_name"
FROM 
    "user"
JOIN 
    "role" ON "role"."id" = "user"."role_id";

-- récupération de toutes les catégories et des sous-catégories associées --

CREATE OR REPLACE VIEW categories_with_subcategories AS
SELECT 
    "category"."id" AS "category_id",
    "category"."name" AS "category_name",
    "subcategory"."id" AS "subcategory_id",
    "subcategory"."name" AS "subcategory_name"
FROM "category"
JOIN "category_has_subcategory" 
    ON "category"."id" = "category_has_subcategory"."category_id"
JOIN "subcategory" 
    ON "category_has_subcategory"."subcategory_id" = "subcategory"."id"
ORDER BY
    "category"."name";

--* récupération de toutes les sous-catégories associées à une catégorie --

CREATE OR REPLACE VIEW subcategories_with_category AS
SELECT 
    "category"."id" AS "category_id",
    "category"."name" AS "category_name",
    "subcategory"."id" AS "subcategory_id",
    "subcategory"."name" AS "subcategory_name"
FROM "category"
JOIN "category_has_subcategory"  
    ON "category"."id" = "category_has_subcategory"."category_id"
JOIN "subcategory" 
    ON "category_has_subcategory"."subcategory_id" = "subcategory"."id";

-- ** récupération de toutes les sous-catégories et des produits correspondant à une catégorie -- 

CREATE OR REPLACE VIEW subcategories_with_products AS
SELECT 
    "category"."id" AS "category_id",
    "category"."name" AS "category_name",
    "subcategory"."id" AS "subcategory_id",
    "subcategory"."name" AS "subcategory_name",
    "item"."id" AS "item_id",
    "item"."name" AS "item_name",
    "item"."picture" AS "item_picture"
FROM "category"
JOIN "item" 
    ON "category"."id" = "category_id"    
JOIN "category_has_subcategory" 
    ON "category"."id" = "category_has_subcategory"."category_id"
JOIN "subcategory" 
    ON "category_has_subcategory"."subcategory_id" = "subcategory"."id";

-- récupération de toutes les catégories correspondant à une sous-catégorie --    

CREATE OR REPLACE VIEW categories_with_subcategory AS
SELECT
    "subcategory"."name" AS "subcategory_name",
    "subcategory"."id" AS "subcategory_id",
    "category"."id" AS "category_id",
    "category"."name" AS "category_name"
FROM "subcategory"
JOIN "category_has_subcategory" 
    ON "subcategory"."id" = "category_has_subcategory"."subcategory_id"
JOIN "category" 
    ON "category_has_subcategory"."category_id" = "category"."id";

--récupération de tous les produits correspondant à une sous-catégorie d'une catégorie
CREATE OR REPLACE VIEW products_with_subcategory_and_category AS
SELECT 
    "item"."id" AS "item_id",
    "item"."name" AS "item_name",
    "item"."picture" AS "item_picture",
    "item"."price" AS "item_price",
    "category"."name" AS "category_name",
    "subcategory"."name" AS "subcategory_name"
FROM 
    "item"
JOIN 
    "subcategory" ON "subcategory"."id" = "item"."subcategory_id"
JOIN 
    "category" ON "category"."id" = "item"."category_id";


-- informations page d'un article incluant information article / créateur de l'article / catégorie et sous-catégorie --

CREATE OR REPLACE VIEW item_information AS
SELECT DISTINCT
    "item"."id" AS "item_id",
    "item"."name" AS "item_name",
    "item"."description" AS "item_description",
    "item"."picture" AS "item_picture",
    "item"."price" AS "item_price",
    "item"."material" AS "item_material",
    "item"."customizable" AS "item_customizable",
    "status"."name" AS "status_name",
    "workshop"."id" AS "workshop_id",
    "workshop"."name" AS "workshop_name",
    "workshop"."zipcode" AS "workshop_zipcode",
    "workshop"."city" AS "workshop_city",
    "workshop"."picture" AS "workshop_picture",
    "category"."name" AS "category_name",
    "subcategory"."name" AS "subcategory_name"
FROM "item"
JOIN "subcategory" 
    ON "subcategory"."id" = "item"."subcategory_id"
JOIN "category" 
    ON "category"."id" = "item"."category_id"
LEFT JOIN "workshop" 
    ON "item"."workshop_id" = "workshop"."id"
LEFT JOIN "status" 
    ON "status"."id" = "status_id";    

-- récupération de tous les articles d'un créateur --

CREATE OR REPLACE VIEW items_by_workshop AS
SELECT 
    "item"."id" AS "item_id",
    "item"."name" AS "item_name",
    "item"."picture" AS "item_picture",
    "item"."price" AS "item_price",
    "item"."material" AS "item_material",
    "item"."customizable" AS "item_customizable",
    "workshop"."id" AS "workshop_id",
    "workshop"."name" AS "workshop_name"
FROM "item"
JOIN "workshop"    
    ON "workshop"."id" = "item"."workshop_id";

-- 6 derniers créateurs inscrits --

CREATE OR REPLACE VIEW latest_workshops AS
SELECT 
    "workshop"."id" AS "workshop_id",
    "workshop"."name" AS "workshop_name",
    "workshop"."picture" AS "workshop_picture"
FROM "workshop"
ORDER BY "workshop"."created_at" DESC 
LIMIT 6;

-- * 6 articles proposés de façon aléatoire --

CREATE OR REPLACE VIEW random_items AS
SELECT 
    "item"."id" AS "item_id",
    "item"."name" AS "item_name",
    "item"."description" AS "item_description",
    "item"."picture" AS "item_picture",
    "item"."price" AS "item_price"
FROM "item"
JOIN "subcategory" 
    ON "item"."subcategory_id" = "subcategory"."id"
JOIN "category_has_subcategory" 
    ON "subcategory"."id" = "category_has_subcategory"."subcategory_id"
JOIN "category" 
    ON "category_has_subcategory"."category_id" = "category"."id"
ORDER BY RANDOM()
LIMIT 6;

--  Récupération de 6 produits d'une catégorie de façon aléatoire --
CREATE OR REPLACE VIEW random_products_by_category AS
SELECT 
    "item_id",
    "item_name",
    "item_picture",
    "item_price",
    "category_name",
    "subcategory_name"
FROM 
    "products_with_subcategory_and_category";

COMMIT;
