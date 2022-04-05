class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }
  
  set name(value: string) {
    if(value.length < 3) throw new Error('Name must be at least 3 characters long');

    this._name = value;
  }

  get price() {
    return this._price;
  }
  
  set price(value: number) {
    if(value < 0) throw new Error('Value must be greater than 0');

    this._price = value;
  }
}

export default OrderItem;
