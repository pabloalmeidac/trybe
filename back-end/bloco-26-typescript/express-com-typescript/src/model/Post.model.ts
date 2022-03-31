import { ResultSetHeader, RowDataPacket } from "mysql2"
import { IPost } from "../interfaces/Post/Post";
import Connection from "./Connection"

export default class PostModel {
  constructor(protected DB: Connection) {}

  async getAll(): Promise<RowDataPacket[]> {
    const [result] = await this.DB.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM TypeScriptExpress.Posts;');

    return result;
  }

  async getById(id: string): Promise<RowDataPacket> {
    const [result] = await this.DB.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM TypeScriptExpress.Posts WHERE id = ?;',[id]);

    return result[0];
  }


  async create({ title, author, category, publicationDate }: IPost): Promise<IPost>{
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'INSERT INTO TypeScriptExpress.Posts(title, author, category, publicationDate) VALUES (?, ?, ?);',[title, author, category, publicationDate]);

    const created = { id: result.insertId, title, author, category, publicationDate};
    return created;
  }

  async update(id: string, { title, author, category, publicationDate }: IPost ): Promise<number> {
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'UPDATE TypeScriptExpress.Posts SET title = ?, author = ?, category = ?, publicationDate = ? WHERE id = ?',[title, author, category,publicationDate, id]);

    return result.affectedRows;
  }

  async exclude(id: string): Promise<number> {
    const [result] = await this.DB.getConnection().execute<ResultSetHeader>(
      'DELETE FROM TypeScriptExpress.Posts WHERE id = ?',[id]);
    
      return result.affectedRows;
  }
}