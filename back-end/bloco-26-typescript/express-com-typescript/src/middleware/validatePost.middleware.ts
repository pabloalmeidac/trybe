import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

export default (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author, category } = req.body;

    const { error } = schema.validate({ title, author, category });
  
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }
  
    return next();
  } catch (err) {
    next(err);
  }
};
