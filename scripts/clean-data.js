const fs = require("fs");

function readDatabaseFile() {
  const rawdata = fs.readFileSync("./assets/database.json");
  return JSON.parse(rawdata);
}

function cleanData(database) {
  const EMPTY_ATTRS = {
    address: "",
    approved_at: "",
    categories: [],
    created_at: "",
    description: "",
    facebook: "",
    id: "",
    instagram: "",
    location: "",
    logo: "",
    menu: "",
    name: "",
    whatsapp: "",
    website: "",
  };

  Object.entries(database["directorio-armenia"]["businesses-by-category"]).forEach(
    ([category, business]) => {
      Object.entries(business).forEach(([businessSlug, businessData]) => {
        const businessDataTransformed = {
          ...EMPTY_ATTRS,
          ...businessData,

          /*
          // Old transformations

          categories: [businessData.category],
          created_at:
            businessData.created_at || new Date(businessData.approved_at).toISOString(),
          id: uuid(),
          slug: businessSlug,
          */
        };

        // eslint-disable-next-line no-param-reassign
        database["directorio-armenia"]["businesses-by-category"][category][
          businessSlug
        ] = businessDataTransformed;

        // eslint-disable-next-line no-param-reassign
        database["directorio-armenia"]["businesses-by-slug"][
          businessSlug
        ] = businessDataTransformed;
      });
    },
  );
}

function writeDatabase(database) {
  fs.writeFileSync("./assets/database-cleaned.json", JSON.stringify(database));
}

setTimeout(async () => {
  try {
    const database = readDatabaseFile();
    cleanData(database);
    writeDatabase(database);

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
