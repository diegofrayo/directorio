export const DEFAULT_METADATA = {
  description: `el principal objetivo de este sitio web es dar a conocer de manera fácil y
          rápida el número de contacto y links de redes sociales de los negocios, pequeñas
          empresas o personas particulares que venden sus productos o servicios a través
          de redes sociales o whatsapp.`,
  title: "directorio ARMENIA",
  url: "https://directorio-armenia.vercel.app",
};

export function getMetadata(
  route: string,
  data?: Record<string, any>,
): Record<string, string> {
  const pageMetadata: Record<string, string> = {};

  switch (route) {
    case "/categorias":
      pageMetadata.description = `Directorio de restaurantes, domicilios y emprendimientos en Armenia`;
      pageMetadata.title = `categorías - ${DEFAULT_METADATA.title}`;
      pageMetadata.url = `${DEFAULT_METADATA.url}/categorias`;
      break;

    case "/categorias/[category]":
      pageMetadata.description = `${data.category.name} en Armenia`;
      pageMetadata.title = `${data.category.name} - ${DEFAULT_METADATA.title}`;
      pageMetadata.url = `${DEFAULT_METADATA.url}/categorias/${data.category.slug}`;
      break;

    case "/contacto":
      pageMetadata.title = `contacto - ${DEFAULT_METADATA.title}`;
      break;

    case "/terminos-y-condiciones":
      pageMetadata.title = `términos y condiciones - ${DEFAULT_METADATA.title}`;
      break;

    default:
      break;
  }

  return {
    ...DEFAULT_METADATA,
    ...pageMetadata,
  };
}
