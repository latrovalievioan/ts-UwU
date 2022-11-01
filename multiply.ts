import { DecToRange } from './decToRange';
import { Flatten } from './flatten';

export type Multiply<X extends number, Y extends number, Acc extends any[] = []> =
  Acc['length'] extends X
    ? Flatten<Acc> extends any[]
      ? Flatten<Acc>['length']
      : never
    : Multiply<X, Y, [...Acc, DecToRange<Y>]>

type x = Multiply<7, 8>
