import * as dotenv from "dotenv";
import express, { Express, NextFunction, Response, Request } from 'express';
import UserController from "./controller/User.controller";
import UserModel from "./model/User.model";
import UserService from "./service/User.service";
import Connection from './model/connection';
dotenv.config();

export default class App {
  private app: Express;
  private PORT = process.env.PORT;

  private connection: Connection
  private userControler: UserController;
  private userService: UserService;
  private userModel: UserModel;



  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.connection = new Connection();

    this.userModel = new UserModel(this.connection);

    this.userService = new UserService(this.userModel);

    this.userControler = new UserController(this.userService);

    this.routes();
  }

  private routes() {
    this.app.get(
      '/',
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({message: 'Acessou.'})
    },
    )
    this.app.get('/users', this.userControler.getAll);
    this.app.get('/users/:id', this.userControler.getById);
    this.app.post('/users', this.userControler.create);
    this.app.put('/users/:id', this.userControler.update);
    this.app.delete('/users/:id', this.userControler.exclude);
  }

  public start() {
    this.app.listen(this.PORT, () => console.log(`Ouvindo na porta ${this.PORT}`));
  }
}