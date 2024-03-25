-- SQLBook: Code
-- Deploy confection-main:crud_function to pg

BEGIN;

------------------------------------------------ ROLE ------------------------------------------------
CREATE FUNCTION "create_role"(json) RETURNS "role" AS $$

    INSERT INTO "role"
    (
        "name"
        
    ) VALUES (
      
        $1->>'name'
      
    )
    RETURNING *;

$$ LANGUAGE sql STRICT; 

CREATE FUNCTION "update_role"(json) RETURNS "role" AS $$

     UPDATE "role" SET
        "name" = COALESCE($1->>'name',"name"),
        "updated_at" = now()
      
    WHERE id = ($1->>'id')::int

    RETURNING *;

$$ LANGUAGE sql STRICT;

----------------------------------------- STATUS---------------------------------------

CREATE FUNCTION "create_status"(json) RETURNS "status" AS $$

    INSERT INTO "status"
    (
        "name"
        
    ) VALUES (
      
        $1->>'name'
      
    )
    RETURNING *;

$$ LANGUAGE sql STRICT; 

CREATE FUNCTION "update_status"(json) RETURNS "status" AS $$

     UPDATE "status" SET
        "name" = COALESCE($1->>'name',"name"),
        "updated_at" = now()
      
    WHERE id = ($1->>'id')::int

    RETURNING *;

$$ LANGUAGE sql STRICT;

----------------------------------------------- SUBCATEGORY  ---------------------------------

CREATE FUNCTION "create_subcategory"(json) RETURNS "subcategory" AS $$

    INSERT INTO "subcategory"
    (
        "name"
        
    ) VALUES (
      
        $1->>'name'
      
    )
    RETURNING *;

$$ LANGUAGE sql STRICT; 



CREATE FUNCTION "update_subcategory"(json) RETURNS "subcategory" AS $$

     UPDATE "subcategory" SET
        "name" = COALESCE($1->>'name',"name"),
        "updated_at" = now()
      
    WHERE id = ($1->>'id')::int

    RETURNING *;

$$ LANGUAGE sql STRICT;

------------------------------------------------ WORKSHOP -----------------------------------------------------

CREATE FUNCTION "create_workshop"(json) RETURNS "workshop" AS $$

    INSERT INTO "workshop"
    (
        "name",
        "email",
        "description",
        "registration_number",
        "address",
        "zipcode",
        "city",
        "phone_number",
        "picture"
    ) VALUES (
        $1->>'name',
        $1->>'email',
        $1->>'description',
        $1->>'registration_number',
        $1->>'address',
        $1->>'zipcode',
        $1->>'city',
        $1->>'phone_number',
        COALESCE($1->>'picture', '')
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    

CREATE FUNCTION "update_workshop"(json) RETURNS "workshop" AS $$

     UPDATE "workshop" SET
        "email" = COALESCE($1->>'email',"email"),
        "name" = COALESCE($1->>'name',"name"),
        "description" = COALESCE($1->>'description',"description"),
        "registration_number" = COALESCE($1->>'registration_number',"registration_number"),
        "address" = COALESCE($1->>'address',"address"),
        "zipcode" = COALESCE($1->>'zipcode',"zipcode"),
        "city" = COALESCE($1->>'city',"city"),
        "phone_number" = COALESCE($1->>'phone_number',"phone_number"),
        "picture" = COALESCE($1->>'picture',"picture"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int

    RETURNING *;

$$ LANGUAGE sql STRICT;

---------------------------------------- USER ---------------------------------------------

CREATE FUNCTION "create_user"(json) RETURNS "user" AS $$

    INSERT INTO "user"
    (
        "lastname",
        "firstname",
        "email",
        "password",
        "address",
        "zipcode",
        "city",
        "phone_number",
        "role_id",
        "workshop_id"
    ) VALUES (
        $1->>'lastname',
        $1->>'firstname',
        $1->>'email',
        $1->>'password',
        COALESCE($1->>'address',''),
        COALESCE($1->>'zipcode',''),
        COALESCE($1->>'city',''),
        COALESCE($1->>'phone_number',''),
        COALESCE(($1->>'role_id')::int,3),
        COALESCE(($1->>'workshop_id')::int,null)
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    


CREATE FUNCTION "update_user"(json) RETURNS "user" AS $$

     UPDATE "user" SET
        "lastname" = COALESCE($1->>'lastname',"lastname"),
        "firstname" = COALESCE($1->>'firstname',"firstname"),
        "email" = COALESCE($1->>'email',"email"),
        "password" = COALESCE($1->>'password',"password"),
        "address" = COALESCE($1->>'address',"address"),
        "zipcode" = COALESCE($1->>'zipcode',"zipcode"),
        "city" = COALESCE($1->>'city',"city"),
        "phone_number" = COALESCE($1->>'phone_number',"phone_number"),
        "role_id" = COALESCE(($1->>'role_id')::int,"role_id"),
        "workshop_id" = COALESCE(($1->>'workshop_id')::int,"workshop_id"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int

    RETURNING *;    
$$ 
LANGUAGE sql STRICT;

---------------------------------------- CATEGORY ---------------------------------------------

CREATE FUNCTION "create_category"(json) RETURNS "category" AS $$

    INSERT INTO "category"
    (
        "name"
        
    ) VALUES (
      
        $1->>'name'

    )
    RETURNING *;

$$ LANGUAGE sql STRICT; 



CREATE FUNCTION "update_category"(json) RETURNS "category" AS $$

     UPDATE "category" SET
        "name" = COALESCE($1->>'name',"name"),
        "updated_at" = now()

    WHERE id = ($1->>'id')::int

    RETURNING *;

$$ LANGUAGE sql STRICT;

---------------------------------------- ITEM ---------------------------------------------

CREATE FUNCTION "create_item"(json) RETURNS "item" AS $$

    INSERT INTO "item"
    (
        "name",
        "description",
        "picture",
        "price",
        "material",
        "customizable",
        "workshop_id",
        "category_id",
        "subcategory_id",
        "status_id"

    ) VALUES (
        $1->>'name',
        $1->>'description',
        COALESCE($1->>'picture',''),
        ($1->>'price')::numeric(6, 2),
        $1->>'material',
        ($1->>'customizable')::boolean,
        ($1->>'workshop_id')::int,
        ($1->>'category_id')::int,
        ($1->>'subcategory_id')::int,
        ($1->>'status_id')::int
    )
    RETURNING *;

$$ LANGUAGE sql STRICT;    


CREATE FUNCTION "update_item"(json) RETURNS "item" AS $$

     UPDATE "item" SET
        "name" = COALESCE($1->>'name',"name"),
        "description" = COALESCE($1->>'description',"description"),
        "picture" = COALESCE($1->>'picture',"picture"),
        "price" = COALESCE(($1->>'price')::numeric(6, 2),"price"),
        "material" = COALESCE($1->>'material',"material"),
        "customizable" = COALESCE(($1->>'customizable')::boolean,"customizable"),
        "workshop_id" = COALESCE(($1->>'workshop_id')::int,"workshop_id"),
        "category_id" = COALESCE(($1->>'category_id')::int,"category_id"),
        "subcategory_id" = COALESCE(($1->>'subcategory_id')::int,"subcategory_id"),
        "status_id" = COALESCE(($1->>'status_id')::int,"status_id"),
        "updated_at" = now()
    WHERE id = ($1->>'id')::int
    RETURNING *;    
$$ LANGUAGE sql STRICT;

COMMIT;
