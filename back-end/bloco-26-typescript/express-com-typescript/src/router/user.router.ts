import UserController from "../controller/User.controller";
import Connection from "../model/Connection";
import UserModel from "../model/User.model";
import UserService from "../service/User.service";
import { Router } from 'express';

const userModel = new UserModel(new Connection);

const userService = new UserService(userModel);

const userControler = new UserController(userService);

const userRouter = Router();

userRouter.get('/', userControler.getAll);
userRouter.get('/:id', userControler.getById);
userRouter.post('/', userControler.create);
userRouter.put('/:id', userControler.update);
userRouter.delete('/:id', userControler.exclude);

export default userRouter;