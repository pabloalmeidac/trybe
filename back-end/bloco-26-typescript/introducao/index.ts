import readline from "readline-sync";

import convertLength from './length';
import convertMass from './mass';
import convertArea from './area';
import convertVolume from './volume';
import convertCapacity from './capacity';
import infoCharacters from './character';
import seasons from './seasons';

const conversions: string ='1 - Length | 2 - Mass | 3 - Volume | 4 - Area | 5 - Capacity | 6 - Nenhuma';

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
    
    case 6:
      break;
  
    default:
      console.log('Numero incorreto');
      break;
  }

  const whichSeason: number = readline.questionInt('Gostaria de saber a estação do ano? \n1 - Sim.\n2 - Não.\n');
  if (whichSeason === 1) seasons();

  const characters: number = readline.questionInt('\nGostaria de informações dos personagens? \n1 - Sim.\n2 - Não.\n');
  if (characters === 1) infoCharacters();

  return console.log('\nFIM');
}

main();
