import { Sugar } from "../utils/PizzaTypes";
import Pizza from "./Pizza";

interface IPizzaSugar extends Pizza {
	flavor: Sugar,
	slices: 4,
}

export default IPizzaSugar;