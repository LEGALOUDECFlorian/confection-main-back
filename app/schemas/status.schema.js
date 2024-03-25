import Joi from "joi";

// regex n'acceptant pas de majuscule et uniquement les caractères spéciaux espace et -
// et se terminant obligatoirement par une lettre
const statusName = /^[a-zà-ÿ-\s]+[a-zà-ÿ]+$/;

export const createStatusSchema = Joi.object({
  name: Joi.string()
    .pattern(statusName)
    .required(),
}).required();

export const updateStatusSchema = Joi.object({
  name: Joi.string()
    .pattern(statusName),
}).required();
