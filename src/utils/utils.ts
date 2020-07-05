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

export function isDevelopmentEnvironment(source?: string): boolean {
  // if (source === "ANALYTICS") {
  //   return true;
  // }

  // if (source === "FIREBASE") {
  //   return false;
  // }

  return !window.location.href.includes(".vercel.app");
}

export function slugify(str: string): string {
  let result = str.replace(/^\s+|\s+$/g, "").toLowerCase();

  // remove accents, swap ñ for n, etc
  const FROM = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const TO = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = FROM.length; i < l; i += 1) {
    result = result.replace(new RegExp(FROM.charAt(i), "g"), TO.charAt(i));
  }

  result = result
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return result;
}
