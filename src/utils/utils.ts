export function createArray(length: number) {
  return Array.from(Array(length).keys()).map(value => value + 1);
}

export function formatPhoneNumber(phoneNumber: string) {
  return `${phoneNumber.substring(0, 3)} ${phoneNumber.substring(
    3,
    6,
  )} ${phoneNumber.substring(6, 10)}`;
}
