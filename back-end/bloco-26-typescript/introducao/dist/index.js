"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const length_1 = require("./length");
const main = () => {
    const result = (0, length_1.convert)(10, 'km', 'm');
    console.log(`A conversão de 10km pra metros é: ${result}`);
};
main();
