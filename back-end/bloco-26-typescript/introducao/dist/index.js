"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const length_1 = __importDefault(require("./length"));
const mass_1 = __importDefault(require("./mass"));
const area_1 = __importDefault(require("./area"));
const volume_1 = __importDefault(require("./volume"));
const capacity_1 = __importDefault(require("./capacity"));
const character_1 = __importDefault(require("./character"));
const seasons_1 = __importDefault(require("./seasons"));
const conversions = '1 - Length | 2 - Mass | 3 - Volume | 4 - Area | 5 - Capacity | 6 - Nenhuma';
const main = () => {
    const whichConversion = readline_sync_1.default.questionInt(`Digite o numero correspondente a que tipo de conversão deseja \n${conversions}\n`);
    switch (whichConversion) {
        case 1:
            (0, length_1.default)();
            break;
        case 2:
            (0, mass_1.default)();
            break;
        case 3:
            (0, volume_1.default)();
            break;
        case 4:
            (0, area_1.default)();
            break;
        case 5:
            (0, capacity_1.default)();
            break;
        case 6:
            break;
        default:
            console.log('Numero incorreto');
            break;
    }
    const whichSeason = readline_sync_1.default.questionInt('Gostaria de saber a estação do ano? \n1 - Sim.\n2 - Não.\n');
    if (whichSeason === 1)
        (0, seasons_1.default)();
    const characters = readline_sync_1.default.questionInt('\nGostaria de informações dos personagens? \n1 - Sim.\n2 - Não.\n');
    if (characters === 1)
        (0, character_1.default)();
    return console.log('\nFIM');
};
main();
