import readline from "readline-sync";

import convertLength from './length';
import convertMass from './mass';
import convertArea from './area';
import convertVolume from './volume';
import convertCapacity from './capacity';
import mmo from './character';

const conversions: string ='1 - Length | 2 - Mass | 3 - Volume | 4 - Area | 5 - Capacity';

const main = (): void => {
  const whichConversion = readline.questionInt(`Digite o numero correspondente a que tipo de conversão deseja \n${conversions}\n`);

  switch (whichConversion) {
    case 1:
      convertLength();
      break;
    case 2:
      convertMass();
      break;
    case 3:
      convertVolume();
      break;
    case 4:
      convertArea();
      break;
    case 5:
      convertCapacity();
      break;
  
    default:
      console.log('Numero incorreto');
      break;
  }
}

main();
mmo();