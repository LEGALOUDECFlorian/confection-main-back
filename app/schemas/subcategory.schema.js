import Joi from "joi";

// regex n'acceptant pas de majuscule et uniquement les caractères spéciaux espace, / et -
// et se terminant obligatoirement par une lettre
const subcategoryName = /^[a-zà-ÿ-/\s]+[a-zà-ÿ]+$/;

export const createSubcategorySchema = Joi.object({
  name: Joi.string()
    .pattern(subcategoryName)
    .required(),
}).required();

export const updateSubcategorySchema = Joi.object({
  name: Joi.string()
    .pattern(subcategoryName),
}).required();
