/**
 * @typedef {object} ApiJsonError - Error response
 * @property {string} error.required - Error message
 */

/**
 * @typedef {object} Category
 * @property {number} id - id de la catégorie
 * @property {string} name - nom de la catégorie
 * @property {string} created_at - date de création de la catégorie
 * @property {string} updated_at - date de mise à jour de la catégorie
 */

/**
 * @typedef {object} CategoryInput
 * @property {string} name.required - nom de la catégorie
 */

/**
 * @typedef {object} Subcategory
 * @property {number} id - id de la sous-catégorie
 * @property {string} name - nom de la sous-catégorie
 * @property {string} created_at - date de création de la sous-catégorie
 * @property {string} updated_at - date de mise à jour de la sous-catégorie
 */

/**
 * @typedef {object} SubcategoryInput
 * @property {string} name.required - nom de la sous-catégorie
 */

/**
 * @typedef {object} Item
 * @property {number} id - id de l'article
 * @property {string} name - nom de l'article
 * @property {string} description - description de l'article
 * @property {string} picture - URL de la photo de l'article
 * @property {number} price - prix de l'article en format avec 2 décimales pour les centimes
 * @property {string} material - matière de fabrication de l'article
 * @property {boolean} customizable - l'article est personnalisable : oui ou non
 * @property {number} workshop_id - id du créateur de l'article
 * @property {number} category_id - id de la catégorie de l'article
 * @property {number} subcategory_id - id de la sous-catégorie de l'article
 * @property {number} status_id - id du statut de l'article
 * @property {string} created_at - date de création de l'article
 * @property {string} updated_at - date de mise à jour de l'article
 */

/**
 * @typedef {object} ItemInput
 * @property {string} name - nom de l'article
 * @property {string} description - description de l'article
 * @property {string} picture - URL de la photo de l'article
 * @property {number} price - prix de l'article en format avec 2 décimales pour les centimes
 * @property {string} material - matière de fabrication de l'article
 * @property {boolean} customizable - l'article est personnalisable : oui ou non
 * @property {number} workshop_id - id du créateur de l'article
 * @property {number} category_id - id de la catégorie de l'article
 * @property {number} subcategory_id - id de la sous-catégorie de l'article
 * @property {number} status_id - id du statut de l'article
 */

/**
 * @typedef {object} ItemByWorkshop
 * @property {string} name - nom de l'article
 * @property {string} picture - URL de la photo de l'article
 * @property {number} price - prix de l'article en format avec 2 décimales pour les centimes
 * @property {string} material - matière de fabrication de l'article
 * @property {boolean} customizable - l'article est personnalisable : oui ou non
 * @property {number} workshop_id - id du créateur de l'article
 * @property {string} workshop_name - nom du créateur de l'article
 */

/**
 * @typedef {object} RandomItem
 * @property {number} id - id de l'article
 * @property {string} name - nom de l'article
 * @property {string} description - description de l'article
 * @property {string} picture - URL de la photo de l'article
 * @property {number} price - prix de l'article en format avec 2 décimales pour les centimes
 */

/**
 * @typedef {object} Status
 * @property {number} id - id du statut
 * @property {string} name - nom du statut
 * @property {string} created_at - date de création du statut
 * @property {string} updated_at - date de mise à jour du statut
 */

/**
 * @typedef {object} StatusInput
 * @property {string} name.required - nom du statut
 */

/**
 * @typedef {object} User
 * @property {number} id - id de l'utilisateur
 * @property {string} lastname - nom de l'utilisateur
 * @property {string} firstname - prénom de l'utilisateur
 * @property {string} email - email de l'utilisateur
 * @property {string} password - mot de passe de l'utilisateur
 * @property {string} address - adresse de l'utilisateur : numéro et nom de rue
 * @property {number} zipcode - code postal de l'utilisateur
 * @property {string} city - nom de la ville de l'utilisateur
 * @property {number} phone_number - numéro de téléphone de l'utilisateur
 * @property {number} role_id - id du rôle de l'utilisateur
 * @property {number} workshop_id - id du créateur si l'utilisateur est également créateur
 * @property {string} created_at - date de création de l'utilisateur
 * @property {string} updated_at - date de mise à jour de l'utilisateur
 */

/**
 * @typedef {object} UserInput
 * @property {string} lastname - nom de l'utilisateur
 * @property {string} firstname - prénom de l'utilisateur
 * @property {string} email - email de l'utilisateur
 * @property {string} password - mot de passe de l'utilisateur
 * @property {string} address - adresse de l'utilisateur : numéro et nom de rue
 * @property {number} zipcode - code postal de l'utilisateur
 * @property {string} city - nom de la ville de l'utilisateur
 * @property {number} phone_number - numéro de téléphone de l'utilisateur
 * @property {number} role_id - id du rôle de l'utilisateur
 * @property {number} workshop_id - id du créateur si l'utilisateur est également créateur
 */

/**
 * @typedef {object} UserWithWorkshop
 * @property {number} role_id - id du rôle de l'utilisateur
 * @property {string} lastname - nom de l'utilisateur
 * @property {string} firstname - prénom de l'utilisateur
 * @property {string} email - email de l'utilisateur
 * @property {string} address - adresse de l'utilisateur : numéro et nom de rue
 * @property {number} zipcode - code postal de l'utilisateur
 * @property {string} city - nom de la ville de l'utilisateur
 * @property {number} phone_number - numéro de téléphone de l'utilisateur
 * @property {number} workshop_id - id du créateur si l'utilisateur est également créateur
 * @property {string} name - nom du créateur
 * @property {string} email - email du créateur
 * @property {string} description - description du créateur
 * @property {number} registration_number - numéro de SIRET du créateur, format à 14 chiffres
 * @property {string} address - adresse du créateur : numéro et nom de rue
 * @property {number} zipcode - code postal du créateur
 * @property {string} city - nom de la ville du créateur
 * @property {number} phone_number - numéro de téléphone du créateur
 * @property {string} picture - URL de la photo du créateur
 */

/**
 * @typedef {object} Workshop
 * @property {number} id - id du créateur
 * @property {string} name - nom du créateur
 * @property {string} email - email du créateur
 * @property {string} description - description du créateur
 * @property {number} registration_number - numéro de SIRET du créateur, format à 14 chiffres
 * @property {string} address - adresse du créateur : numéro et nom de rue
 * @property {number} zipcode - code postal du créateur
 * @property {string} city - nom de la ville du créateur
 * @property {number} phone_number - numéro de téléphone du créateur
 * @property {string} picture - URL de la photo du créateur
 * @property {string} created_at - date de création du créateur
 * @property {string} updated_at - date de mise à jour du créateur
 */

/**
 * @typedef {object} Workshop_preview
 * @property {number} id - id du créateur
 * @property {string} name - nom du créateur
 * @property {string} picture - URL de la photo du créateur
 */

/**
 * @typedef {object} WorkshopInput
 * @property {string} name - nom du créateur
 * @property {string} email - email du créateur
 * @property {string} description - description du créateur
 * @property {number} registration_number - numéro de SIRET du créateur, format à 14 chiffres
 * @property {string} address - adresse du créateur : numéro et nom de rue
 * @property {number} zipcode - code postal du créateur
 * @property {string} city - nom de la ville du créateur
 * @property {number} phone_number - numéro de téléphone du créateur
 * @property {string} picture - URL de la photo du créateur
 * @property {string} created_at - date de création du créateur
 * @property {string} updated_at - date de mise à jour du créateur
 */

/**
 * @typedef {object} Deleted
 */

/**
 * @typedef {object} Association
 * @property {number} id - id de l'article
 * @property {number} subcategory_id - id de l'article
 * @property {number} category_id - id de l'article
 * @property {string} created_at - date de création du statut
 */

/**
 * @typedef {object} LogInfo
 * @property {string} email - email de l'utilisateur
 * @property {string} password - hash du mot de passe de l'utilisateur
 */

/**
 * @typedef {object} Token
 * @property {string} access_token - token de l'utilisateur
 * @property {string} refresh_token - refresh_token de l'utilisateur
 */
