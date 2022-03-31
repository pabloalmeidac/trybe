import { IUser } from "../interfaces/User/User";
import UserModel from "../model/User.model";

export default class UserService {
  constructor(private userModel: UserModel) {

  }

  async getAll() {
    const users = await this.userModel.getAll();

    return users;
  }

  async getById(id: string) {
    const user = await this.userModel.getById(id);

    return user;
  }

  async create({ name, email, password }: IUser) {
    const emailExists = await this.userModel.getByEmail(email);

    if (emailExists) return { status: 400, data : { message: 'Email already exists'} };
    
    const created= await this.userModel.create({ name, email, password });

    return { status: 201, data : created };
  }

  async update(id: string, { name, email, password }: IUser) {
    const updated = await this.userModel.update(id, { name, email, password });

    if (updated === 0) return { status: 422, data : { message: 'Failed to update'} };

    return { status: 200, data : { message: 'User updated successfully'} };
  }

  async exclude (id: string) {
    const deleteStatus = await this.userModel.exclude(id);

    if (deleteStatus === 0) return { status: 422, data: { message: 'Failed to delete user' } };

    return { status: 200, data: { message: 'User deleted successfully '} };
  };
}