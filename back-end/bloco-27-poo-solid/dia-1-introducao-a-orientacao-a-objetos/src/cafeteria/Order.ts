import OrderItem from "./OrderItem";

class Order {
  private _clientName: string;
  private _items: OrderItem[] = [];
  private _formPayment: string;
  private _discount: number = 0;

  constructor(clientName: string, items:  OrderItem[], formPayment: string, discount?: number) {
    this._clientName = clientName;
    this._items = items;
    this._formPayment = formPayment;
    
    if (discount)  this._discount = discount;
  }

  get clientName() {
    return this._clientName;
  }

  set clientName(value: string) {
    if(value.length < 3) throw new Error('Client name must be at least 3 characters long');

    this._clientName = value;
  }

  get items() {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if(value.length === 0) throw new Error('Order cannot be empty');

    this._items = value;
  }

  get formPayment() {
    return this._formPayment;
  }

  set formPayment(value: string) {
    this._formPayment = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if(value < 0 ) throw new Error('discount cannot be less than');

    this._discount = value;
  }

  totalOrder () {
    const total = this._items.reduce((previousValue, item) => previousValue += item.price, 0)

    return total;
  }
  
  totalOrderWithDiscount () {
    const totalOrder = this.totalOrder();
    const total = totalOrder * ( 1 - this._discount);
    
    return total; 
  }
}

export default Order;
