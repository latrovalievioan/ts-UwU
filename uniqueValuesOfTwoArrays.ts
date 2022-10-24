import { SumOfTwoPositiveInts } from './sumOfTwoInts';

type a = [1, 'hehe', 23]

type b = [23, '1', 'hehe']

type MergeArrays<
  Arr1 extends any[],
  Arr2 extends any[],
> = [...Arr1, ...Arr2]

type IsInArray<
  V, 
  Arr extends any[],
> = V extends Arr[number]
  ? true
  : false

type ExcludeDuplicates<
  Arr extends any[],
  Acc extends any[] = [],
  i extends number = 0,
> = i extends Arr['length']
  ? Acc
  : SumOfTwoPositiveInts<i, 1> extends number
    ? IsInArray<Arr[i], Acc> extends true
      ? ExcludeDuplicates<Arr, Acc, SumOfTwoPositiveInts<i, 1>>
      : ExcludeDuplicates<Arr, [...Acc, Arr[i]], SumOfTwoPositiveInts<i, 1>>
    : never

type test = ExcludeDuplicates<MergeArrays<a, b>>
