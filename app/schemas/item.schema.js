import Joi from "joi";

export const createItemSchema = Joi.object({
  name: Joi.string()
    .required(),
  description: Joi.string()
    .required(),
  picture: Joi.string()
    .required(),
  price: Joi.number()
    .required(),
  material: Joi.string()
    .required(),
  customizable: Joi.boolean()
    .required(),
  workshop_id: Joi.number()
    .integer()
    .min(1),
  category_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  subcategory_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  status_id: Joi.number()
    .integer()
    .min(1)
    .required(),
}).required();

export const updateItemSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  picture: Joi.string(),
  price: Joi.number(),
  material: Joi.string(),
  customizable: Joi.boolean(),
  workshop_id: Joi.number(),
  category_id: Joi.number(),
  subcategory_id: Joi.number(),
  status_id: Joi.number(),
}).min(1).required();
