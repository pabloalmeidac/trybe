// ./index.ts

import Car from "./Car";
import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";
import IPizza from "./Pizza";


class Main {
  private opala = new Car("Volksvagem", Colors.BLACK, 4);

  /* constructor() {
   
  } */

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
  
  makeAPizza(): void {
    const calabresa: IPizza = { flavor: 'Calabresa', slices: 8 };
    console.log(`Pizza de ${calabresa.flavor} feita com ${calabresa.slices} pedaços.`);
  }
}

const app = new Main();

app.driveTheCar();
app.makeAPizza();

