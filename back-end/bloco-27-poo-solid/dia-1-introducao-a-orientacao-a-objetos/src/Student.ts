class Student {
  private _enroll: string;
  private _name: string;
  private _grades: number[];
  private _gradesWork: number[];

  constructor (enroll: string, name: string ) {
    this._enroll = enroll;
    this._name = name;
    this._grades = [];
    this._gradesWork = [];
  }

  get enroll() {
    return this._enroll;
  }

  set enroll(value: string) {
    this._enroll = value;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) throw new Error('Name must be at least 3 characters long');
  
    this._name = value;
  }

  get grades() {
    return this._grades;
  }

  set grades(value: number[]) {
    if(value.length > 4) throw new Error('Student can only have four grades of test');
    this._grades = value;
  }

  get gradesWork() {
    return this._gradesWork;
  }

  set gradesWork(value: number[]) {
    if(value.length >2) throw new Error('Student can only have four grades of work');

    this._gradesWork = value;
  }

  public gradesSum() {
    let sum = 0;
    for(let i = 0; i < this._grades.length; i += 1) {
      if(i < this._gradesWork.length) sum = this._gradesWork[i] + sum;
      sum = this._grades[i] + sum;
    }
    return sum;
  }
  
  public gradesAverage() {
    const sum = this.gradesSum();
    const media = sum/6;
    return media;
  }
}

export default Student;
