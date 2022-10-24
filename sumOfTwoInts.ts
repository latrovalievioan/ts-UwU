import { DecToLength } from './decToLength';

type sumOfTwoLengths<
  L1 extends any[], 
  L2 extends any[]
> = [...L1, ...L2]['length'];

export type sumOfTwoPositiveInts<
  N1 extends number, 
  N2 extends number
> = sumOfTwoLengths<
  DecToLength<N1>,
  DecToLength<N2>
>;


type x = sumOfTwoPositiveInts<999, 999>
