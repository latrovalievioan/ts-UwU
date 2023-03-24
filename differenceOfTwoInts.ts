import { DecToRange } from './decToRange';

export type DifferenceOfTwoPositiveInts<
  N1 extends number,
  N2 extends number,
  Acc extends any[] = []
> = DecToRange<N1> extends [...DecToRange<N2>, ...infer Rest]
  ? Rest['length']
  : DecToRange<N2> extends [...DecToRange<N1>, ...infer Rest]
  ? Rest['length']
  : 0;

type test = DifferenceOfTwoPositiveInts<800, 40>;
