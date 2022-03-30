import Car from "./Car";
import Doors from "./utils/Doors";
import { Flavor, Slices } from "./interfaces/Pizza";
import IPizzaCommon from "./interfaces/PizzaCommon";
import IPizzaSugar from "./interfaces/PizzaSugar";
import IPizzaVegetarian from "./interfaces/PizzaVegetarian";
import Colors from "./utils/Colors";
import Directions from "./utils/Directions";

class Main {
  private opala = new Car("Volksvagem", Colors.BLACK, 4);
  
  /* constructor() {} */

  driveTheCar(): void {
    this.opala.hodor(Doors.DRIVER);
    this.opala.closeTheDoor(Doors.DRIVER);
    this.opala.turnOn();
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.LEFT);
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.RIGHT);
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.RIGHT);
    this.opala.speedDown();
    this.opala.stop();
    this.opala.hodor(Doors.BEHIND_RIDE);
    this.opala.closeTheDoor(Doors.BEHIND_RIDE);
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.RIGHT);
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.LEFT);
    this.opala.speedUp();
    this.opala.speedDown();
    this.opala.turn(Directions.RIGHT);
    this.opala.speedDown();
    this.opala.stop();
    this.opala.hodor(Doors.BEHIND_RIDE);
    this.opala.closeTheDoor(Doors.BEHIND_RIDE);
    this.opala.speedUp();
  }
  
  makeAPizza(flavor: Flavor, slices: Slices): void {
    if (flavor ==='Calabresa' || flavor ==='Calabresa' || flavor ==='Calabresa') {
      const pizza: IPizzaCommon = {flavor, slices};
      return console.log(`Pizza de ${pizza.flavor} feita com ${pizza.slices} pedaços.`);
    }

    if (flavor ==='Marguerita' || flavor ==='Palmito' || flavor ==='Cogumelos') {
      const pizza: IPizzaVegetarian = { flavor, slices};
      return console.log(`Pizza de ${pizza.flavor} feita com ${pizza.slices} pedaços.`);
    }

    if (flavor ==='Nutela' || flavor ==='Goiabada com Queijo' || flavor ==='Marshmallow') {
      if(slices === 4) {
        const pizza: IPizzaSugar = { flavor, slices: 4 };
        return console.log(`Pizza de ${pizza.flavor} feita com ${pizza.slices} pedaços.`);
      } else {
        return console.log(`Pizza de ${flavor} só pode ser feita com 4 pedaços.`);
      }
    }
  }
}

const app = new Main();

app.driveTheCar();
app.makeAPizza('Calabresa', 8);
app.makeAPizza('Marguerita', 6);
app.makeAPizza('Nutela', 6); 


