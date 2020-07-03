const CATEGORIES = [
  {
    slug: "alimentos",
    name: "alimentos",
    icon: "🥑",
    total: 1,
  },
  {
    slug: "comida-peruana",
    name: "comida peruana",
    icon: "🇵🇪",
    total: 1,
  },
  {
    slug: "postres-y-dulces",
    name: "postres y dulces",
    icon: "🧁",
    total: 1,
  },
  {
    slug: "empanadas",
    name: "empanadas",
    icon: "🌮",
    total: 1,
  },
  {
    slug: "productos-de-belleza",
    name: "productos de belleza",
    icon: "💅",
    total: 1,
  },
  {
    slug: "asados-y-arepas",
    name: "asados y arepas",
    icon: "🥘",
    total: 1,
  },
  {
    slug: "comidas-rapidas",
    name: "comidas rápidas",
    icon: "🍔",
    total: 2,
  },
  {
    slug: "regalos",
    name: "regalos",
    icon: "🎁",
    total: 2,
  },
].sort((a, b) => (a.name > b.name ? 1 : -1));

module.exports = {
  CATEGORIES,
};
