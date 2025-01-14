type Falsy = '' | 0 | -0 | 0n | false | null | undefined;
type MaybeArray<T> = T | T[];

export const clsx = (...classes: MaybeArray<string | Falsy>[]): string | undefined => {
  const list = classes
    .flatMap((it) => Array.isArray(it) ? it : [it])
    .flatMap((it) => it ? it.split(/\s+/) : [])
    .filter((it) => it !== '');

  return list.length > 0 ? list.join(' ') : undefined;
};
