import { Vegetarian } from "../utils/PizzaTypes";
import Pizza from "./Pizza";


interface IPizzaVegetarian extends Pizza {
	flavor: Vegetarian
}

export default IPizzaVegetarian;