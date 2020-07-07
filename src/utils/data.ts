import tsh from "~/lib/tsh";
import CATEGORIES from "~/data/categories.json";
import { createArray } from "./utils";

export { CATEGORIES };

export function generateCategoryBusinessList(): Array<Record<string, string | boolean>> {
  return createArray(6).map(index => {
    return {
      name: "El nombre de tu negocio...",
      whatsapp: "3113728898",
      instagram: "nombre_de_tu_negocio",
      facebook: index % 3 === 0 ? "nombre_de_tu_negocio" : "",
      description: "Descripción de tu negocio...",
      logo: "",
      location: index % 2 === 0 ? "https://goo.gl/maps/QEwtRjpK8Qe7JHPN6" : "",
      address: index % 3 === 0 ? "Direccion #123 89-34" : "",
      menu: index % 3 === 0 ? "https://goo.gl/maps/QEwtRjpK8Qe7JHPN6" : "",
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
