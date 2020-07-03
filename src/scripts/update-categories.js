const database = require("./database-connection");
const { CATEGORIES } = require("../data");

async function updateCategories() {
  return database.ref(`directorio-armenia/categories`).set(
    CATEGORIES.reduce((result, category) => {
      result[category.slug] = category; // eslint-disable-line no-param-reassign
      return result;
    }, {}),
  );
}

setTimeout(async () => {
  try {
    await updateCategories();
    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
