import 'dotenv/config';
import express, { Express, NextFunction, Response, Request } from 'express';
import postRouter from './router/post.router';
import userRouter from "./router/user.router";

export default class App {
  private app: Express;
  private PORT = process.env.PORT;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.routes();
  }
  
  private routes() {
    this.app.get('/', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ message: 'Acessou.'}));
    this.app.use('/users', userRouter);
    this.app.use('/posts', postRouter);

  }

  public start() {
    this.app.listen(this.PORT, () => console.log(`Ouvindo na porta ${this.PORT}`));
  }
}