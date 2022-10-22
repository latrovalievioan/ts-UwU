import { sumOfTwoPositiveInts } from './sumOfTwoInts';

type a = [1, 'hehe', 23]

type b = [23, '1', 'hehe']

type mergeArrays<
  Arr1 extends any[],
  Arr2 extends any[],
> = [...Arr1, ...Arr2]

type isInArray<
  V, 
  Arr extends any[],
> = V extends Arr[number]
  ? true
  : false

type excludeDuplicates<
  Arr extends any[],
  Acc extends any[] = [],
  i extends number = 0,
> = i extends Arr['length']
  ? Acc
  : sumOfTwoPositiveInts<i, 1> extends number
    ? isInArray<Arr[i], Acc> extends true
      ? excludeDuplicates<Arr, Acc, sumOfTwoPositiveInts<i, 1>>
      : excludeDuplicates<Arr, [...Acc, Arr[i]], sumOfTwoPositiveInts<i, 1>>
    : never

type x = excludeDuplicates<mergeArrays<a, b>>
