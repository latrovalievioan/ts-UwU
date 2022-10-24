import { DecToLength } from './decToLength';
import { sumOfTwoPositiveInts } from './sumOfTwoInts';

type MinutesMatrix<M extends number, Acc extends any[] = []> =
  Acc['length'] extends M
    ? Acc
    : MinutesMatrix<M, [...Acc, DecToLength<60>]>

type MinutesMatrixToSeconds<
  M extends any[][], 
  Acc extends any[] = [], 
  I extends number = 0,
> =
  I extends M['length']
    ? Acc['length']
    : sumOfTwoPositiveInts<I, 1> extends number
      ? MinutesMatrixToSeconds<M, [...Acc, ...M[I]], sumOfTwoPositiveInts<I, 1>>
      : never

type test = MinutesMatrixToSeconds<MinutesMatrix<2>>
