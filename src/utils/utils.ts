export function createArray(length: number): Array<number> {
  return Array.from(Array(length).keys()).map(value => value + 1);
}

export function formatPhoneNumber(phoneNumber: string): string {
  return `${phoneNumber.substring(0, 3)} ${phoneNumber.substring(
    3,
    6,
  )} ${phoneNumber.substring(6, 10)}`;
}

export function createQueryFromObject(object: Record<string, string>): string {
  const result = Object.entries(object)
    .map(([key, value]) => {
      if (value === "" || value === null || value === undefined) {
        return "";
      }

      return `${key}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join("&");

  return result;
}

export function isDevelopmentEnvironment(): boolean {
  return !window.location.href.includes(".vercel.app");
}
