export const createArray = length => {
  return Array.from(Array(length).keys()).map(value => value + 1);
};
