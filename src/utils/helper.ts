export const getIntInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// used to extract some keys from an object
export function omitKeys<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const shallowCopy = { ...obj };
  keys.forEach((key) => {
    delete shallowCopy[key];
  });
  return shallowCopy;
}
