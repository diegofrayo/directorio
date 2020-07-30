const fs = require("fs");

function slugify(str) {
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

const CATEGORIES = [
  {
    name: "Salsas y Mermeladas",
    icon: "🍯",
    total: 1,
  },
  {
    name: "Comida Peruana",
    icon: "🇵🇪",
    total: 1,
  },
  {
    name: "Postres y Dulces",
    icon: "🍩",
    total: 1,
  },
  {
    name: "Empanadas",
    icon: "🌮",
    total: 1,
  },
  {
    name: "Productos de Belleza",
    icon: "💅",
    total: 2,
  },
  {
    name: "Asados y Arepas",
    icon: "🥘",
    total: 1,
  },
  {
    name: "Comidas Rápidas",
    icon: "🌭",
    total: 2,
  },
  {
    name: "Hamburgueserías",
    icon: "🍔",
    total: 1,
  },
  {
    name: "Alitas",
    icon: "🍗",
    total: 1,
  },
  {
    name: "Regalos y Variedades",
    icon: "🎁",
    total: 5,
  },
  {
    name: "Pizza",
    icon: "🍕",
    total: 1,
  },
  {
    name: "Almuerzos Ejecutivos",
    icon: "🍲",
    total: 2,
  },
  {
    name: "Productos Saludables",
    icon: "🥗",
    total: 1,
  },
  {
    name: "Comida de Mar",
    icon: "🐟",
    total: 1,
  },
  {
    name: "Licorerías",
    icon: "🍸",
    total: 1,
  },
]
  .map(category => {
    return { ...category, slug: slugify(category.name) };
  })
  .sort((a, b) => (a.name > b.name ? 1 : -1));

try {
  fs.writeFileSync(
    "./src/data/categories.json",
    JSON.stringify(
      CATEGORIES.reduce((result, category) => {
        result[category.slug] = category; // eslint-disable-line no-param-reassign
        return result;
      }, {}),
    ),
  );
} catch (e) {
  console.log(e);
  process.exit();
}
