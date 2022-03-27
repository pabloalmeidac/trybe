const unitys = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const convert = (value: number, unityBase: string, unityConversion: string): number => {
  const forIndex: number = unitys.indexOf(unityBase);
  const toIndex: number = unitys.indexOf(unityConversion); 
  const exponent: number = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}

export default convert;