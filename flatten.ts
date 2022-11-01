import { SumOfTwoPositiveInts } from './sumOfTwoInts';

export type Flatten<T extends any[], Acc extends any[] = [], I extends number = 0> =
  I extends T['length']
    ? Acc
    : SumOfTwoPositiveInts<I, 1> extends number
      ? T[I] extends any[]
        ? Flatten<T, [...Acc, ...Flatten<T[I]>], SumOfTwoPositiveInts<I, 1>>
        : Flatten<T, [...Acc, T[I]], SumOfTwoPositiveInts<I, 1>>
      : never


type Test = Flatten<[[1,2,3,4, [5, 6, 7, 8, [112, 1112, 1112]]], 9, 10, 11, 12]>
