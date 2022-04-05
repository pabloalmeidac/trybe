class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  
  set name(value: string) {
    if(value.length < 3) throw new Error('Name must be at least 3 characters long');

    this._name = value;
  }
}

export default Client;