-- SQLBook: Code
BEGIN;

TRUNCATE TABLE "category_has_subcategory", "item", "category", "user", "workshop", "subcategory", "status", "role" RESTART IDENTITY CASCADE;

INSERT INTO "role" ("name")VALUES
  ('admin'),
  ('createur'),
  ('membre');

INSERT INTO "status" ("name")VALUES
  ('brouillon'),
  ('en ligne'),
  ('indisponible'),
  ('archivé');  

INSERT INTO "subcategory" ("name")VALUES
  ('pantalon/short/jogging/salopette'),--1
  ('tshirt'),--2
  ('manteau/veste/cape'),--3
  ('pull'),--4
  ('gilet'),--5
  ('sweat-shirt'),--6
  ('chemise'),--7
  ('déguisement'),--8
  ('robe'),--9
  ('jupe'),--10
  ('lingerie'),--11
  ('sous-vêtement'),--12
  ('vêtements'),--13
  ('couche lavable'),--14
  ('anneau dentaire'),--15
  ('housse carnet de santé'),--16
  ('sac à langer'),--17
  ('bavoir'),--18
  ('sortie de bain'),--19
  ('chaussons'),--20
  ('bonnet'),--21
  ('lingette lavable'),--22
  ('culotte lavable'),--23
  ('serviette lavable'),--24
  ('fleur de douche'),--25
  ('serviette à cheveux'),--26
  ('mouchoirs'),--27
  ('châle'),--28
  ('foulard'),--29
  ('écharpe'),--30
  ('sac/pochette/trousse'),--31
  ('sac d''école'),--32
  ('besace'),--33
  ('pochette pour PC'),--34
  ('pochette pour téléphone'),--35
  ('pochette pour écouteur'),--36
  ('pochette à dessin'),--37
  ('pochette pour aiguille à tricoter'),--38
  ('tote bag'),--39
  ('sac à vrac'),--40
  ('porte feuille/porte monnaie/porte carte'),--41
  ('pochette pour livre'),--42
  ('chapeau/Cheveux '),--43
  ('vêtement et accessoire pour barbie'),--44
  ('maison de poupée en tissus'),--45
  ('cube'),--46
  ('laçage montessori'),--47
  ('livre d''éveil'),--48
  ('peluche/doudou'),--49
  ('dinette'),--50
  ('blouse pour soignant'),--51
  ('turban pour chimio'),--52
  ('pochette pour stylo'),--53
  ('calot'),--54
  ('patch de stomie'),--55
  ('sac de pompe de chimiothérapie'),--56
  ('manique'),--57
  ('coussin bloque-porte'),--58
  ('coussin'),--59
  ('tablier'),--60
  ('serviette'),--61
  ('éponge'),--62
  ('linge de maison');--63

INSERT INTO "workshop" ("name", "email", "description", "registration_number", "address", "zipcode", "city", "phone_number", "picture") VALUES
  ('Couture Chic', 'contact@couturechic.com', 'Atelier de couture haut de gamme', '12345678901234', '123 Rue de la Mode', '75001', 'Paris', '+33123456789', 'https://pixabay.com/fr/photos/couture-machine-chanteur-coudre-1332860/'), --1
  ('Couture Express', 'info@coutureexpress.com', 'Atelier de couture rapide et efficace', '23456789012345', '456 Avenue des Tissus', '69002', 'Lyon', '+33456789012', 'https://pixabay.com/fr/photos/chiffon-en-tissu-textile-soie-1237813/'), --2
  ('Couture Créative', 'contact@couturecreative.com', 'Atelier de couture pour projets personnalisés', '34567890123456', '789 Boulevard des Aiguilles', '33000', 'Bordeaux', '+33567890123', 'https://pixabay.com/fr/photos/machine-couture-fait-main-usine-1186852/'), --3
  ('Couture Charme', 'info@couturecharme.com', 'Atelier de couture vintage et rétro', '45678901234567', '1010 Rue des Broderies', '59000', 'Lille', '+33345678901', 'https://pixabay.com/fr/photos/ciseaux-cuir-atelier-travail-5788751/'); --4

INSERT INTO "category" ("name")VALUES
  ('homme'),--1
  ('femme'),--2
  ('enfant'),--3
  ('bébé'),--4
  ('hygiène'),--5
  ('accessoires'),--6
  ('jeu-jouet'),--7
  ('médical/soignant'),--8
  ('maison');--9

INSERT INTO "category_has_subcategory" ("category_id", "subcategory_id")VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (2, 2),
  (2, 9),
  (2, 10),
  (2, 7),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 1),
  (2, 3),
  (2, 11),
  (3, 2),
  (3, 9),
  (3, 10),
  (3, 7),
  (3, 4),
  (3, 5),
  (3, 6),
  (3, 1),
  (3, 3),
  (3, 12),
  (3, 13),
  (3, 14),
  (4, 15),
  (4, 16),
  (4, 17),
  (4, 18),
  (4, 19),
  (4, 20),
  (4, 21),
  (5, 22),
  (5, 23),
  (5, 24),
  (5, 25),
  (5, 26),
  (5, 27),
  (6, 28),
  (6, 29),
  (6, 30),
  (6, 31),
  (6, 32),
  (6, 33),
  (6, 34),
  (6, 35),
  (6, 36),
  (6, 37),
  (6, 38),
  (6, 39),
  (6, 40),
  (6, 41),
  (6, 42),
  (6, 43),
  (7, 44),
  (7, 45),
  (7, 46),
  (7, 47),
  (7, 48),
  (7, 49),
  (7, 50),
  (8, 51),
  (8, 52),
  (8, 53),
  (8, 54),
  (8, 55),
  (8, 56),
  (8, 57),
  (9, 58),
  (9, 59),
  (9, 60),
  (9, 61),
  (9, 62),
  (9, 63);

INSERT INTO "user" ("lastname", "firstname", "email", "password", "address", "zipcode", "city", "phone_number", "role_id")
VALUES 
  ('Doe', 'John', 'john.doe@example.com', '$2b$10$YghNE8DqFKRlBxLatosOPOHUuwz6zC7z/qITTuMfVFB2wzqhjlkq6', '123 Rue de la Liberté', '75001', 'Paris', '0601020304', 1),
  ('Smith', 'Alice', 'alice.smith@example.com', '$2b$10$YghNE8DqFKRlBxLatosOPOHUuwz6zC7z/qITTuMfVFB2wzqhjlkq6', '456 Avenue des Roses', '69001', 'Lyon', '0603040506', 2),
  ('Johnson', 'Emma', 'emma.johnson@example.com', '$2b$10$YghNE8DqFKRlBxLatosOPOHUuwz6zC7z/qITTuMfVFB2wzqhjlkq6', '789 Boulevard des Champs', '33000', 'Bordeaux', '0605060708', 3),
  ('Couturier', 'Charle', 'charle.couturier@lolilol.com', '$2b$10$YghNE8DqFKRlBxLatosOPOHUuwz6zC7z/qITTuMfVFB2wzqhjlkq6', '', '', '', '', 3);

INSERT INTO "item" ("name", "description", "picture", "price", "material", "customizable", "workshop_id", "category_id", "subcategory_id", "status_id", "created_at")
VALUES
  ('Item 1', 'Description for Item 1', 'path/to/picture1.jpg', 19.99, 'Material 1', true, 1, 1, 1, 1, NOW()),
  ('Item 2', 'Description for Item 2', 'path/to/picture2.jpg', 29.99, 'Material 2', false, 2, 1, 2, 2, NOW()),
  ('Item 3', 'Description for Item 3', 'path/to/picture3.jpg', 39.99, 'Material 3', true, 3, 2, 3, 1, NOW());


COMMIT;