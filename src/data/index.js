const CATEGORIES = [
  {
    slug: "alimentos",
    name: "alimentos",
    icon: "🥑",
    total: 1,
  },
  {
    slug: "productos-de-belleza",
    name: "productos de belleza",
    icon: "💅",
    total: 1,
  },
].sort((a, b) => (a.name > b.name ? 1 : -1));

module.exports = {
  CATEGORIES,
};
