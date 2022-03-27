"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitys = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const errorValue = 'Valor não pode ser menor ou igual a 0';
const errorUnity = 'Digite entre 0 a 6 para escolher unidade base';
const unity = '0 - kl | 1 - hl | 2 - dal | 3 - l | 4 - dl | 5 - cl | 6 - ml';
const exec = () => {
    const value = readline_sync_1.default.questionFloat('Digite o valor para ser convertido \n');
    if (value >= 0) {
        const unityBase = readline_sync_1.default.questionInt(`Digite o numero correspondente a unidade base do valor escolhido \n${unity}\n`);
        if (unityBase >= 0 && unityBase <= 6) {
            const forConvert = unitys[unityBase];
            const unityConversion = readline_sync_1.default.questionInt(`Digite o numero correspondente a unidade a ser convertida \n${unity}\n`);
            if (unityConversion >= 0 && unityConversion <= 6) {
                const toConvert = unitys[unityConversion];
                return convert(value, forConvert, toConvert);
            }
            else {
                return errorUnity;
            }
        }
        else {
            return errorUnity;
        }
    }
    else {
        return errorValue;
    }
};
const convert = (value, unityBase, unityConversion) => {
    const forIndex = unitys.indexOf(unityBase);
    const toIndex = unitys.indexOf(unityConversion);
    const exponent = (toIndex - forIndex);
    const result = value * Math.pow(10, exponent);
    console.log(`A conversão de ${value}${unityBase} é ${result}${unityConversion}\n`);
    return result;
};
exports.default = exec;
