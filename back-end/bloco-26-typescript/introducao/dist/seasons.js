"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var Years;
(function (Years) {
    Years["JANEIRO"] = "Janeiro";
    Years["FEVEREIRO"] = "Fevereiro";
    Years["MARCO"] = "Mar\u00E7o";
    Years["ABRIL"] = "Abril";
    Years["MAIO"] = "Maio";
    Years["JUNHO"] = "Junho";
    Years["JULHO"] = "Julho";
    Years["AGOSTO"] = "Agosto";
    Years["SETEMBRO"] = "Setembro";
    Years["OUTUBRO"] = "Outubro";
    Years["NOVEMBRO"] = "Novembro";
    Years["DEZEMBRO"] = "Dezembro";
})(Years || (Years = {}));
var Station;
(function (Station) {
    Station["PRIMAVERA"] = "Primavera";
    Station["VERAO"] = "Ver\u00E3o";
    Station["OUTONO"] = "Outono";
    Station["INVERNO"] = "Inverno";
})(Station || (Station = {}));
const yearsNames = Object.values(Years).map(item => item);
const main = () => {
    const index = readline_sync_1.default.keyInSelect(yearsNames, "Digite um mes do ano", { cancel: "SAIR" });
    const hemisferio = readline_sync_1.default.questionInt('Digite o hemisfério \n1 - Norte \n2 - Sul\n');
    if (index === -1)
        return console.log('Você saiu!');
    if (hemisferio === 1) { //hemisferio norte
        switch (index) {
            case 0: // JANEIRO
                return console.log(`A estação que se encontra é ${Station.INVERNO}.`);
            case 1: // FEVEREIRO
                return console.log(`A estação que se encontra é ${Station.INVERNO}.`);
            case 2: // MARÇO
                return console.log(`A estação que se encontra é ${Station.INVERNO} e ${Station.PRIMAVERA}.`);
            case 3: // ABRIL
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA}.`);
            case 4: // MAIO
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA}.`);
            case 5: // JUNHO
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA} e ${Station.VERAO}.`);
            case 6: // JULHO
                return console.log(`A estação que se encontra é ${Station.VERAO}.`);
            case 7: // AGOSTO
                return console.log(`A estação que se encontra é ${Station.VERAO}.`);
            case 8: // SETEMBRO
                return console.log(`A estação que se encontra é ${Station.VERAO} e ${Station.OUTONO}.`);
            case 9: // OUTUBRO
                return console.log(`A estação que se encontra é ${Station.OUTONO}.`);
            case 10: // NOVEMBRO
                return console.log(`A estação que se encontra é ${Station.OUTONO}.`);
            case 11: // DEZEMBRO
                return console.log(`A estação que se encontra é ${Station.OUTONO} e ${Station.INVERNO}.`);
            default:
                return console.log('Digitou numero errado.');
        }
    }
    if (hemisferio === 2) {
        switch (index) {
            case 0: // JANEIRO
                return console.log(`A estação que se encontra é ${Station.VERAO}.`);
            case 1: // FEVEREIRO
                return console.log(`A estação que se encontra é ${Station.VERAO}.`);
            case 2: // MARÇO
                return console.log(`A estação que se encontra é ${Station.VERAO} e ${Station.OUTONO}.`);
            case 3: // ABRIL
                return console.log(`A estação que se encontra é ${Station.OUTONO}.`);
            case 4: // MAIO
                return console.log(`A estação que se encontra é ${Station.OUTONO}.`);
            case 5: // JUNHO
                return console.log(`A estação que se encontra é ${Station.OUTONO} e ${Station.INVERNO}.`);
            case 6: // JULHO
                return console.log(`A estação que se encontra é ${Station.INVERNO}.`);
            case 7: // AGOSTO
                return console.log(`A estação que se encontra é ${Station.INVERNO}.`);
            case 8: // SETEMBRO
                return console.log(`A estação que se encontra é ${Station.INVERNO} e ${Station.PRIMAVERA}.`);
            case 9: // OUTUBRO
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA}.`);
            case 10: // NOVEMBRO
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA}.`);
            case 11: // DEZEMBRO
                return console.log(`A estação que se encontra é ${Station.PRIMAVERA} e ${Station.VERAO}.`);
            default:
                return console.log('Digitou numero errado.');
        }
    }
    else {
        return console.log('Digitou o numero do hemisferio errado.');
    }
};
exports.default = main;
