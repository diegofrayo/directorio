import tsh from "~/lib/tsh";
import CATEGORIES from "~/data/categories.json";
import { createArray, slugify } from "./utils";

export { CATEGORIES };

export function generateCategoryBusinessList(
  total: number,
): Array<Record<string, string | boolean | string[]>> {
  return createArray(total).map(index => {
    return {
      address: index % 3 === 0 ? "Direccion #123 89-34" : "",
      approved_at: new Date().toISOString(),
      categories: [],
      created_at: new Date().toISOString(),
      description: "Descripción de tu negocio...",
      facebook: index % 3 === 0 ? "nombre_de_tu_negocio" : "",
      id: `${Date.now()}-${index}`,
      instagram: "nombre_de_tu_negocio",
      location: index % 2 === 0 ? "https://goo.gl/maps/QEwtRjpK8Qe7JHPN6" : "",
      logo: "",
      menu: index % 3 === 0 ? "https://goo.gl/maps/QEwtRjpK8Qe7JHPN6" : "",
      name: "El nombre de tu negocio",
      slug: slugify("El nombre de tu negocio"),
      whatsapp: "3113728898",
      website:
        index % 2 === 0
          ? `http://localhost:3000/${slugify("El nombre de tu negocio")}`
          : "",
    };
  });
}

export function fetchCategoryBusinessList(
  category: string | string[],
): Promise<Array<Record<string, string | boolean>>> {
  const categoryParam: string = Array.isArray(category) ? category.join(",") : category;

  return tsh("/api")
    .get("/businesses", { params: { category: categoryParam } })
    .json();
}

export function fetchBusinessBySlug(
  business: string | string[],
): Promise<Record<string, string | boolean | string[]>> {
  const businessParam: string = Array.isArray(business) ? business.join(",") : business;

  return tsh("/api")
    .get("/businesses", { params: { business: businessParam } })
    .json();
}
