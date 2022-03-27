"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capacity_1 = __importDefault(require("./capacity"));
const length_1 = __importDefault(require("./length"));
const mass_1 = __importDefault(require("./mass"));
const area_1 = __importDefault(require("./area"));
const volume_1 = __importDefault(require("./volume"));
const character_1 = __importDefault(require("./character"));
const main = () => {
    const resultLength = (0, length_1.default)(10, 'km', 'm');
    const resultMass = (0, mass_1.default)(50, 'kg', 'g');
    const resultCapacity = (0, capacity_1.default)(1, 'kl', 'l');
    const resultArea = (0, area_1.default)(2, 'km²', 'm²');
    const resultVolume = (0, volume_1.default)(30, 'km³', 'm³');
    console.log(`A conversão de 10km pra metros é ${resultLength}m`);
    console.log(`A conversão de 50kg pra gramas é ${resultMass}g`);
    console.log(`A conversão de 1kl pra litros é ${resultCapacity}l`);
    console.log(`A conversão de 2km² pra litros² é ${resultArea}l²`);
    console.log(`A conversão de 30km³ pra metros³ é ${resultVolume}m³`);
};
main();
(0, character_1.default)();
