import { Multiply } from './multiply';
import { DifferenceOfTwoPositiveInts } from './differenceOfTwoInts';

//TODO: make it work with 0

export type toPowerOf<
  N extends number,
  Pow extends number,
  Acc extends number = N
> = Pow extends 1
  ? Acc
  : Multiply<Acc, N> extends number
  ? DifferenceOfTwoPositiveInts<Pow, 1> extends number
    ? toPowerOf<N, DifferenceOfTwoPositiveInts<Pow, 1>, Multiply<Acc, N>>
    : never
  : never;

type test = toPowerOf<2, 8>;
