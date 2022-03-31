import { NextFunction, Request, Response } from "express";
import PostService from "../service/Post.service";

export default class PostController {

  constructor(private postService: PostService) {}
  
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await this.postService.getAll();

      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const post = await this.postService.getById(id);

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { title, author, category, publicationDate } = req.body;
    try {
      const { status, data } = await this.postService.create({ title, author, category, publicationDate });

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { title, author, category, publicationDate } = req.body;
    const { id } = req.params;
    try {
      const { status, data } = await this.postService.update(id, { title, author, category, publicationDate });

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  exclude = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const { status, data } = await this.postService.exclude(id);

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}