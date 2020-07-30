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
  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set(null);
    }),
  );

  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set({
          ...business,
          ...businessUpdates,
        });
    }),
  );

  await database.ref(`directorio-armenia/businesses-by-slug/${business.slug}`).set({
    ...business,
    ...businessUpdates,
  });

  return true;
}

setTimeout(async () => {
  try {
    const businessToUpdate = await getBusinessToUpdate("nikolic-ventanilla");

    await updateBusiness(businessToUpdate, {});

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
