import { DecToRange } from './decToRange';

type SumOfTwoLengths<
  L1 extends any[], 
  L2 extends any[]
> = [...L1, ...L2]['length'];

export type SumOfTwoPositiveInts<
  N1 extends number, 
  N2 extends number
> = SumOfTwoLengths<
  DecToRange<N1>,
  DecToRange<N2>
>;


type test = SumOfTwoPositiveInts<999, 999>
