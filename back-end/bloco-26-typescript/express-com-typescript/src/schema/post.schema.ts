import Joi from 'joi';

export default Joi.object({
  title: Joi.string().required(),
  author: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  publicationDate: Joi.string().required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
  'string.min': '400|{{ #label }} length must be at least {{ #limit }} characters long',
});