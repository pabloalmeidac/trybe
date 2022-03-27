"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitys = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const convert = (value, unityBase, unityConversion) => {
    const forIndex = unitys.indexOf(unityBase);
    const toIndex = unitys.indexOf(unityConversion);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
};
exports.default = convert;
