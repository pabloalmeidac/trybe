import mysql, { Pool } from "mysql2/promise";

export default class Connection {
  private connection: Pool

  constructor() {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME
    })
  }
  getConnection(): Pool { return this.connection};
}