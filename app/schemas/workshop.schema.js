import Joi from "joi";

const zipcode = /^0[1-9]\d{3}$|^[1-8]\d{4}$|^9[0-59]\d{3}$|^97[1-8]\d{2}$|^98[046-9]\d{2}$|^00000$/;
const verifyPhoneNumber = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

export const createWorkshopSchema = Joi.object({
  name: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required(),
  description: Joi.string()
    .required(),
  registration_number: Joi.string()
    .length(14)
    .pattern(/^\d+$/)
    .required(),
  address: Joi.string()
    .required(),
  zipcode: Joi.string()
    .pattern(zipcode)
    .required(),
  city: Joi.string()
    .required(),
  phone_number: Joi.string()
    .pattern(verifyPhoneNumber)
    .required(),
  picture: Joi.string()
    .default(""),
}).required();

export const updateWorkshopSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email(),
  description: Joi.string(),
  registration_number: Joi.string()
    .length(14)
    .pattern(/^\d+$/),
  address: Joi.string(),
  zipcode: Joi.string()
    .pattern(zipcode),
  city: Joi.string(),
  phone_number: Joi.string()
    .pattern(verifyPhoneNumber),
  picture: Joi.string(),
}).min(1).required();
