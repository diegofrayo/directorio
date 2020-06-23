export function createArray(length: number) {
  return Array.from(Array(length).keys()).map(value => value + 1);
}
