import Joi from "joi";

const verifyZipcode = /^0[1-9]\d{3}$|^[1-8]\d{4}$|^9[0-59]\d{3}$|^97[1-8]\d{2}$|^98[046-9]\d{2}$|^00000$/;
const verifyPhoneNumber = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
// eslint-disable-next-line no-useless-escape
const verifyPassword = /^\$2[aby]?\$\d{1,2}\$[.\/A-Za-z0-9]{53}$/;

export const createUserSchema = Joi.object({
  lastname: Joi.string()
    .required(),
  firstname: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .pattern(verifyPassword)
    .required(),
  address: Joi.string()
    .default(""),
  zipcode: Joi.string()
    .pattern(verifyZipcode)
    .default(""),
  city: Joi.string()
    .default(""),
  phone_number: Joi.string()
    .pattern(verifyPhoneNumber)
    .default(""),
  role_id: Joi.number()
    .integer()
    .default(3),
  workshop_id: Joi.number()
    .integer()
    .min(1),
}).required();

export const updateUserSchema = Joi.object({
  lastname: Joi.string(),
  firstname: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string()
    .min(8)
    .pattern(verifyPassword),
  address: Joi.string(),
  zipcode: Joi.string()
    .pattern(verifyZipcode),
  city: Joi.string(),
  phone_number: Joi.string()
    .pattern(verifyPhoneNumber),
  role_id: Joi.number(),
  workshop_id: Joi.number(),
}).min(1).required();
