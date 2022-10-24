export type DecToLength<
  T extends number,
  Arr extends any[] = []
> = Arr['length'] extends T 
  ? Arr 
  : DecToLength<T, [...Arr, '.']>;

