import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
  _make: string;
  _color: Colors;
  _dors: number;

  constructor(make: string, color: Colors, doors: number) {
    this._make = make;
    this._color = color;
    this._dors = doors;
  }

  turnOn(): void {
    console.log('Ligando carro.');
  }

  turnOff(): void {
    console.log('Desligando carro.');
  }

  turn(direcion: Directions): void {
    console.log(`Virando para a ${direcion}.`);
  }

  speedUp(): void {
    console.log('Acelerando o carro.');
  }

  speedDown(): void {
    console.log('Reduzindo a velocidade do carro.');
  }

  stop(): void {
    console.log('Parando carro.');
  }

  honk(): void {
    console.log('Buzinando: BIP BIP');
  }

  hodor(door: Doors): void {
    console.log(`Abrindo a porta ${door}.`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta ${door}.`);
  }
  
}

export default Car;