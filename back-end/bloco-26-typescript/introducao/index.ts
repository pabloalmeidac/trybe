import convertCapacity from './capacity';
import convertLength from './length';
import convertMass from './mass';
import convertArea from './area';
import convertVolume from './volume';
import mmo from './character';

const main = (): void => {
  const resultLength: number = convertLength(10,'km', 'm');
  const resultMass: number = convertMass(50,'kg', 'g');
  const resultCapacity: number = convertCapacity(1,'kl', 'l');
  const resultArea: number = convertArea(2,'km²', 'm²');
  const resultVolume: number = convertVolume(30,'km³', 'm³');

  console.log(`A conversão de 10km pra metros é ${resultLength}m`)
  console.log(`A conversão de 50kg pra gramas é ${resultMass}g`)
  console.log(`A conversão de 1kl pra litros é ${resultCapacity}l`)
  console.log(`A conversão de 2km² pra litros² é ${resultArea}l²`)
  console.log(`A conversão de 30km³ pra metros³ é ${resultVolume}m³`)
}

main();
mmo();