const database = require("./database-connection");

async function getBusinessToUpdate(businessSlug) {
  const response = (
    await database
      .ref(`directorio-armenia/businesses-by-slug/${businessSlug}`)
      .once("value")
  ).val();

  if (!response) throw new Error("Business not found");

  return response;
}

async function updateBusiness(business, businessUpdates) {
  const finalBusiness = { ...business, ...businessUpdates };

  await database.ref(`directorio-armenia/businesses-by-slug/${business.slug}`).set(null);
  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set(null);
    }),
  );

  await database
    .ref(`directorio-armenia/businesses-by-slug/${finalBusiness.slug}`)
    .set(finalBusiness);
  await Promise.all(
    finalBusiness.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set(finalBusiness);
    }),
  );

  return true;
}

setTimeout(async () => {
  try {
    const businessToUpdate = await getBusinessToUpdate("bonaven");
    await updateBusiness(businessToUpdate, {});
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}, 1000);
