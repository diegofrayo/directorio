const fs = require("fs");
const firebaseDatabase = require("./database-connection");

function readDatabaseFile() {
  const rawdata = fs.readFileSync("./assets/database.json");
  return JSON.parse(rawdata);
}

function generateBusinessesBySlug(database) {
  const businessesBySlug = {};

  Object.values(database["directorio-armenia"]["businesses-by-category"]).forEach(
    businesses => {
      Object.entries(businesses).forEach(([businessSlug, businessData]) => {
        businessesBySlug[businessSlug] = businessData;
      });
    },
  );

  return businessesBySlug;
}

function writeChangesInDatabase(businessesBySlug) {
  return firebaseDatabase
    .ref("directorio-armenia/businesses-by-slug")
    .set(businessesBySlug);
}

setTimeout(async () => {
  try {
    const database = readDatabaseFile();
    const businessesBySlug = generateBusinessesBySlug(database);
    await writeChangesInDatabase(businessesBySlug);

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
