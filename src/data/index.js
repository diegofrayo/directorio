const CATEGORIES = [
  {
    slug: "comidas",
    name: "comidas",
    icon: "🥘",
    total: 5,
  },
  {
    slug: "licorerias",
    name: "licorerías",
    icon: "🍺",
    total: 4,
  },
  {
    slug: "ropa",
    name: "ropa",
    icon: "👗|👔",
    total: 3,
  },
].sort((a, b) => (a.name > b.name ? 1 : -1));

module.exports = {
  CATEGORIES,
};
