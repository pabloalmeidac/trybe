const unitys: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

const convert = (value: number, unityBase: string, unityConversion: string): number => {
  const forIndex: number = unitys.indexOf(unityBase);
  const toIndex: number = unitys.indexOf(unityConversion); 
  const exponent: number = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}

export default convert;