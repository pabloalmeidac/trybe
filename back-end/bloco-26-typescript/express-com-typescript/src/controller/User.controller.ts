import { NextFunction, Request, Response } from "express";
import UserService from "../service/User.service";

export default class UserController {

  constructor(private userService: UserService) {}
  
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAll();

      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const user = await this.userService.getById(id);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    try {
      const { status, data } = await this.userService.create({ name, email, password });

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    const { id } = req.params;
    try {
      const { status, data } = await this.userService.update(id, { name, email, password });

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  exclude = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const { status, data } = await this.userService.exclude(id);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}