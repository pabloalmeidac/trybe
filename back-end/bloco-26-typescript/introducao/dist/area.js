"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitys = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const convert = (value, unityBase, unityConversion) => {
    const forIndex = unitys.indexOf(unityBase);
    const toIndex = unitys.indexOf(unityConversion);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
};
exports.default = convert;
