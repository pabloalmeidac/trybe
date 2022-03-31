export interface IUser {
  id?: string,
  name: string,
  email: string,
  password: string,
};

export interface IUserCreated {
  id: number,
  name: string,
  email: string,
};