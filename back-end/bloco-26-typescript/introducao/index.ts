import convertLength from "./length";
import convertMass from "./mass";

const main = (): void => {
  const resultLength: number = convertLength(10,'km', 'm');
  const resultMass: number = convertMass(50,'kg', 'g');

  console.log(`A conversão de 10km pra metros é ${resultLength}m`)
  console.log(`A conversão de 50kg pra gramas é ${resultMass}g`)

}

main();