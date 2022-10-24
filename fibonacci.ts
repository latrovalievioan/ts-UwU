import { SumOfTwoPositiveInts } from './sumOfTwoInts'

type fibToN<
  N extends number,
  Arr extends any[] = [1, 0]
> = Arr['length'] extends N
  ? Arr
  : Arr[0] & Arr[1] extends number
    ? fibToN<N, [SumOfTwoPositiveInts<Arr[0], Arr[1]>, ...Arr]>
    : never

type test = fibToN<18>
