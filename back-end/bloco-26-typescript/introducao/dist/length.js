"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitys = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convert = (value, unityBase, unityConversion) => {
    const forIndex = unitys.indexOf(unityBase);
    const toIndex = unitys.indexOf(unityConversion);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
};
exports.default = convert;