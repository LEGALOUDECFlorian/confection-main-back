# Routes à implémenter pour les tests

## Resource Not Found
ex : GET {{endpoint}}/je-n-existe-pas -> pour le endpoint global

## Test de route avec paramètre valide

ex : GET http://localhost:4000/api/items/2

## Test de route avec paramètre invalide

ex : GET http://localhost:4000/api/items/truc

## Test de route avec paramètre inexistant (mais valide)

ex : GET http://localhost:4000/api/items/9999

## Pour les CREATIONS et les MODIFICATIONS

Il faudra penser à tester une création/modification avec une valeur invalide (mais une route valide).
ex : POST {{endpoint}}/categories
Content-Type: application/json

{
  "name": "9999"
}

Il faudra penser à tester une création/modification avec une valeur obligatoire manquante (mais une route valide).
ex : POST {{endpoint}}/categories
Content-Type: application/json

{
  "name": "Chaussettes" (mais il manque le champ "subcategory_id") 
}




