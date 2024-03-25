import Joi from "joi";

// regex n'acceptant pas de majuscule et uniquement les caractères spéciaux espace, / et -
// et se terminant obligatoirement par une lettre
const categoryName = /^[a-zà-ÿ-/\s]+[a-zà-ÿ]+$/;

export const createCategorySchema = Joi.object({
  name: Joi.string()
    .pattern(categoryName)
    .required(),
}).required();

export const updateCategorySchema = Joi.object({
  name: Joi.string()
    .pattern(categoryName),
}).required();
