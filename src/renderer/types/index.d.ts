
declare module '*.gif';

interface IDotProp {
  get(obj: object, path: string): any;
  set<TObject extends object>(obj: TObject, path: string, value: any): TObject;
  has(obj: object, path: string): boolean;
  delete<TObject extends object>(obj: object, path: string): TObject;
}

declare const dotProp: IDotProp;

declare module 'dot-prop-immutable' {
  export = dotProp;
}
