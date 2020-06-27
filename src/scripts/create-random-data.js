const database = require("./database-connection");
const { CATEGORIES } = require("../data");

Object.values(CATEGORIES).forEach(category => {
  for (let i = 0; i < category.total * 2; i++) {
    database.ref("business").push({
      approved: i % 2 === 0,
      category: category.slug,
      created_at: new Date().toISOString(),
      description: "Descripcion del negocio...",
      facebook: i % 3 === 0 ? "mi_negocio_xyz" : "",
      instagram: "mi_negocio_xyz",
      logo: "",
      name: `Mi negocio XY${i}`,
      whatsapp: "3113728898",
    });
  }
});

setTimeout(() => {
  process.exit();
}, 5000);
