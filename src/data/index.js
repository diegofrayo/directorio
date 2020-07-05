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
    name: "salsas y mermeladas",
    icon: "🍯",
    total: 1,
  },
  {
    name: "comida peruana",
    icon: "🇵🇪",
    total: 1,
  },
  {
    name: "postres y dulces",
    icon: "🍩",
    total: 1,
  },
  {
    name: "empanadas",
    icon: "🌮",
    total: 1,
  },
  {
    name: "productos de belleza",
    icon: "💅",
    total: 1,
  },
  {
    name: "asados y arepas",
    icon: "🥘",
    total: 1,
  },
  {
    name: "comidas rápidas",
    icon: "🌭",
    total: 2,
  },
  {
    name: "hamburgueserías",
    icon: "🍔",
    total: 1,
  },
  {
    name: "alitas",
    icon: "🍗",
    total: 1,
  },
  {
    name: "regalos y variedades",
    icon: "🎁",
    total: 2,
  },
  {
    name: "pizza",
    icon: "🍕",
    total: 1,
  },
]
  .map(category => {
    return { ...category, slug: slugify(category.name) };
  })
  .sort((a, b) => (a.name > b.name ? 1 : -1));

module.exports = {
  CATEGORIES,
};
