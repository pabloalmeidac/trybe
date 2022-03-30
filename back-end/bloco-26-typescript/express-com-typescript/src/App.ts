import express, { Express, NextFunction, Response, Request } from 'express';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.routes();
  }

  private routes() {
    this.app.get(
      '/',
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: 'Acessou' });
      }
    )
  }

  public start() {
    this.app.listen(3000, () => console.log('Ouvindo na porta 3000'));
  }
}