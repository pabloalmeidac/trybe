import { convert } from "./length";

const main = (): void => {
  const result: number = convert(10,'km', 'm');

  console.log(`A conversão de 10km pra metros é: ${result}`)
}

main();