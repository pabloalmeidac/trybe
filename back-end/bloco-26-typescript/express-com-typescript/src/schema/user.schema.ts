import Joi from 'joi';

export default Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
  'string.email': '400|{{ #label }} must be a valid email',
  'string.min': '400|{{ #label }} length must be at least {{ #limit }} characters long',
  'string.max': '400|{{ #label }} length must be until {{ #limit }} characters long',
});