type decToLength<
  T extends number,
  Arr extends any[] = []
> = Arr['length'] extends T 
  ? Arr 
  : decToLength<T, [...Arr, '.']>;

type sumOfTwoLengths<
  L1 extends any[], 
  L2 extends any[]
> = [...L1, ...L2]['length'];

export type sumOfTwoPositiveInts<
  N1 extends number, 
  N2 extends number
> = sumOfTwoLengths<
  decToLength<N1>,
  decToLength<N2>
>;


type x = sumOfTwoPositiveInts<999, 999>
