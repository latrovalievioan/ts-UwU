import { sumOfTwoPositiveInts } from './sumOfTwoInts'

type fibToN<
  N extends number,
  Arr extends any[] = [1, 0]
> = Arr['length'] extends N
  ? Arr
  : Arr[0] & Arr[1] extends number
    ? fibToN<N, [sumOfTwoPositiveInts<Arr[0], Arr[1]>, ...Arr]>
    : never

type seq = fibToN<18>
