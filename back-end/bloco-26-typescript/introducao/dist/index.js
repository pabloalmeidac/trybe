"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const length_1 = __importDefault(require("./length"));
const mass_1 = __importDefault(require("./mass"));
const main = () => {
    const resultLength = (0, length_1.default)(10, 'km', 'm');
    const resultMass = (0, mass_1.default)(50, 'kg', 'g');
    console.log(`A conversão de 10km pra metros é ${resultLength}m`);
    console.log(`A conversão de 50kg pra gramas é ${resultMass}g`);
};
main();
