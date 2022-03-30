export type Slices = 4 | 6 | 8;
export type Flavor = string;

interface IPizza {
  flavor: Flavor,
  slices: Slices,
};

export default IPizza;