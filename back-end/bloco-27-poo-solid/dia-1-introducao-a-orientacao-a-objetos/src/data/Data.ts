class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    // if month or day is invalid getDate will return NaN.
    // if valid, return the day of the month.
    const date = new Date(`${year}/${month}/${day}`).getDate();
    
    if (date !== day) {
      day = 1;
      month = 1;
      year = 1900;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  get day(): number {
    return this._day
  }

  set day(value: number) {
    if (value < 1 || value > 31) throw new Error('Day has to be between 1 and 31');
    this._day = value;
  }

  get month(): number {
    return this._month
  }

  set month(value: number) {
    if (value < 1 || value > 12) throw new Error('Month has to be between 1 and 12');
    this._month = value;
  }

  get year(): number {
      return this._year
  }

  set year(value: number) {
    if (value < 0 ) throw new Error('Year cannot be less than 0');
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
  ];

  return months[this.month - 1];
  }

  compare(date: Data): number {

    const currentDate = `${this.year}/${this.month}/${this.day}`;

    const dateParam = `${date.year}/${date.month}/${date.day}`;

    if (new Date(currentDate) > new Date(dateParam)) return 1;
    if (new Date(currentDate) < new Date(dateParam)) return -1;

    return 0;
}
}


export default Data;