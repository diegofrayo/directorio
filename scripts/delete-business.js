const database = require("./database-connection");

async function getBusinessToDelete(businessSlug) {
  const response = (
    await database
      .ref(`directorio-armenia/businesses-by-slug/${businessSlug}`)
      .once("value")
  ).val();

  if (!response) throw new Error("Business not found");

  return response;
}

async function deleteBusiness(business) {
  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set(null);
    }),
  );

  await database.ref(`directorio-armenia/businesses-by-slug/${business.slug}`).set(null);

  return true;
}

setTimeout(async () => {
  try {
    const businessToDelete = await getBusinessToDelete("");

    await deleteBusiness(businessToDelete);

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
