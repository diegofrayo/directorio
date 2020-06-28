import tsh from "~/lib/tsh";
import { CATEGORIES } from "~/data";
import { createArray } from "./utils";

export { CATEGORIES };

export function generateCategoryBusinessList(): Array<Record<string, string | boolean>> {
  return createArray(5).map(index => {
    return {
      name: "El nombre de tu negocio...",
      whatsapp: "3113728898",
      instagram: "nombre_de_tu_negocio",
      facebook: index % 3 === 0 ? "nombre_de_tu_negocio" : "",
      description: "Descripción de tu negocio...",
      logo: "",
    };
  });
}

export function fetchCategoryBusinessList(
  category: string | string[],
): Promise<Array<Record<string, string | boolean>>> {
  const categoryParam: string = Array.isArray(category) ? category.join(",") : category;

  return tsh("/api")
    .get("/business", { params: { category: categoryParam } })
    .json();
}
