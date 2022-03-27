"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitys = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const convert = (value, unityBase, unityConversion) => {
    const forIndex = unitys.indexOf(unityBase);
    const toIndex = unitys.indexOf(unityConversion);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
};
exports.default = convert;
