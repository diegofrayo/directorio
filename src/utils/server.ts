import database from "./firebase";

export async function fetchBusinessBySlug(
  slug: string,
): Promise<Record<string, unknown>> {
  const response = (
    await database.ref(`directorio-armenia/businesses-by-slug/${slug}`).once("value")
  ).val();

  return response;
}
