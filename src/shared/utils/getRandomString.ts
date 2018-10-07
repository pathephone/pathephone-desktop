
export const getRandomString: () => string = (): string => (
  // tslint:disable-next-line insecure-random
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);
