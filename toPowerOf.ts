import { Multiply } from './multiply';
import { DifferenceOfTwoPositiveInts } from './differenceOfTwoInts';

export type toPowerOf<
  N extends number,
  Pow extends number,
  Acc extends number = 1
> = Pow extends 0
  ? Acc
  : Multiply<Acc, N> extends number
  ? DifferenceOfTwoPositiveInts<Pow, 1> extends number
    ? toPowerOf<N, DifferenceOfTwoPositiveInts<Pow, 1>, Multiply<Acc, N>>
    : never
  : never;

type test = toPowerOf<3, 4>;
