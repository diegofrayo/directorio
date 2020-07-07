const database = require("./database-connection");

async function getBusinessToUpdate(path) {
  const response = (
    await database.ref(`directorio-armenia/businesses/${path}`).once("value")
  ).val();

  return response;
}

async function updateBusiness(business, businessUpdates) {
  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses/${category}/${business.slug}`)
        .set(null);
    }),
  );

  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses/${category}/${business.slug}`)
        .set({
          ...business,
          ...businessUpdates,
        });
    }),
  );

  return true;
}

setTimeout(async () => {
  try {
    const businessToUpdate = await getBusinessToUpdate("category/business-slug");
    await updateBusiness(businessToUpdate, {});

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
