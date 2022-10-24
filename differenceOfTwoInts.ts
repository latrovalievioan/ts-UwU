import { DecToLength } from './decToLength';

type DifferenceOfTwoPositiveInts<N1 extends number, N2 extends number, Acc extends any[] = []> =
  DecToLength<N1> extends [...DecToLength<N2>, ...infer Rest]
    ? Rest['length']
    : DecToLength<N2> extends [...DecToLength<N1>, ...infer Rest]
      ? Rest['length']
      : 0

type test = DifferenceOfTwoPositiveInts<800, 40>
