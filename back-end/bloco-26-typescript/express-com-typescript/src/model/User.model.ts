import { ResultSetHeader, RowDataPacket } from "mysql2"
import { IUser, IUserCreated } from "../interfaces/User/User";
import Connection from "./Connection"

export default class UserModel {
  constructor(protected DB: Connection) {}

  async getAll(): Promise<RowDataPacket[]> {
    const [result] = await this.DB.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM TypeScriptExpress.Users;');

    return result;
  }

  async getById(id: string): Promise<RowDataPacket> {
    const [result] = await this.DB.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM TypeScriptExpress.Users WHERE id = ?;',[id]);

    return result[0];
  }

  async getByEmail(email: string): Promise<RowDataPacket> {
    const [result] = await this.DB.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM TypeScriptExpress.Users WHERE email = ?;',[email]);

    return result[0];
  }

  async create({ name, email, password }: IUser): Promise<IUserCreated> {
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'INSERT INTO TypeScriptExpress.Users(name, email, password) VALUES (?, ?, ?);',[name, email, password]);

    const created = { id: result.insertId, name, email};
    return created;
  }

  async update(id: string, { name, email, password }: IUser): Promise<number> {
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'UPDATE TypeScriptExpress.Users SET name = ?, email = ?, password = ? WHERE id = ?',[name, email, password, id]);

    return result.affectedRows;
  }

  async exclude(id: string): Promise<number> {
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'DELETE FROM TypeScriptExpress.Users WHERE id = ?',[id]);
    
      return result.affectedRows;
  }
}