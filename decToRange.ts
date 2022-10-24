export type DecToRange<
  T extends number,
  Arr extends any[] = []
> = Arr['length'] extends T 
  ? Arr 
  : DecToRange<T, [...Arr, '.']>;

type test = DecToRange<3>
