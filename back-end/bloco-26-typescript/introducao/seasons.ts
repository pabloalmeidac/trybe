import readline from "readline-sync";

enum Years {
  JANEIRO = "Janeiro",
  FEVEREIRO = "Fevereiro",
  MARCO = "Março",
  ABRIL = "Abril",
  MAIO = "Maio",
  JUNHO = "Junho",
  JULHO = "Julho",
  AGOSTO = "Agosto",
  SETEMBRO = "Setembro",
  OUTUBRO = "Outubro",
  NOVEMBRO = "Novembro",
  DEZEMBRO = "Dezembro",
}


enum Station {
  PRIMAVERA = 'Primavera', 
  VERAO = 'Verão', 
  OUTONO = 'Outono', 
  INVERNO= 'Inverno' 
}

const yearsNames: string[] = Object.values(Years).map(item => item);

const main = (): void => {
  const index: number = readline.keyInSelect(yearsNames, "Digite um mes do ano", { cancel: "SAIR" });
  const hemisferio: number = readline.questionInt('Digite o hemisfério \n1 - Norte \n2 - Sul\n');
 
  if (index === -1) return console.log('Você saiu!');

  if( hemisferio === 1) { //hemisferio norte
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
  } else{
    return console.log('Digitou o numero do hemisferio errado.');
  }
}

export default main;