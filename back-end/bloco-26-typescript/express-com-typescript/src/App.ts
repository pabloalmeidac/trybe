import 'dotenv/config';
import express, { Express, NextFunction, Response, Request } from 'express';
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
  }

  public start() {
    this.app.listen(this.PORT, () => console.log(`Ouvindo na porta ${this.PORT}`));
  }
}