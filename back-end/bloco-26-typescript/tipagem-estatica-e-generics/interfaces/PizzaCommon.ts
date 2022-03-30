import { Common } from "../utils/PizzaTypes";
import Pizza from "./Pizza";

interface IPizzaCommon extends Pizza {
	flavor: Common
}

export default IPizzaCommon;