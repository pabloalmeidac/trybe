import readline from "readline-sync";

const unitys: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const errorValue: string = 'Valor não pode ser menor ou igual a 0';
const errorUnity: string = 'Digite entre 0 a 6 para escolher unidade base';
const unity: string = '0 - kg | 1 - hg | 2 - dag | 3 - g | 4 - dg | 5 - cg | 6 - mg';

const exec = (): number | string => {
  const value = readline.questionFloat('Digite o valor para ser convertido \n');
  
  if (value >= 0) {
    const unityBase = readline.questionInt(`Digite o numero correspondente a unidade base do valor escolhido \n${unity}\n`);

    if (unityBase >= 0 && unityBase <= 6) {
      const forConvert: string = unitys[unityBase];

      const unityConversion = readline.questionInt(`Digite o numero correspondente a unidade a ser convertida \n${unity}\n`);

      if (unityConversion >= 0 && unityConversion <= 6) {
        const toConvert: string = unitys[unityConversion]; 

        return convert(value, forConvert, toConvert);
      } else {
        return errorUnity;
      }
    } else {
      return errorUnity;
    }
  } else {
    return errorValue;
  }
}

const convert = (value: number, unityBase: string, unityConversion: string): number => {
  const forIndex: number = unitys.indexOf(unityBase);
  const toIndex: number = unitys.indexOf(unityConversion); 
  const exponent: number = (toIndex - forIndex);

  const result = value * Math.pow(10, exponent);
  console.log(`A conversão de ${value}${unityBase} é ${result}${unityConversion}\n`);
  
  return result;
}

export default exec;
