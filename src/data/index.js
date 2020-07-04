const { slugify } = require("../utils/utils.ts");

const CATEGORIES = [
  {
    name: "alimentos",
    icon: "🥑",
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
    icon: "🍔",
    total: 2,
  },
  {
    name: "regalos",
    icon: "🎁",
    total: 2,
  },
]
  .map(category => {
    return { ...category, slug: slugify(category.name) };
  })
  .sort((a, b) => (a.name > b.name ? 1 : -1));

module.exports = {
  CATEGORIES,
};
