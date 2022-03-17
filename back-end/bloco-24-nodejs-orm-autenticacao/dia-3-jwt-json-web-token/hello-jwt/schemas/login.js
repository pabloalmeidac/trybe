const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '422|{{ #label }} must be a string',
  'string.min': '422|{{ #label }} length must be at least {{ #limit }} characters long',
});

const isValid = (objUser) => loginSchema.validate(objUser);


module.exports = { isValid };