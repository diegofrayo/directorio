const database = require("./database-connection");

async function getBusinessToApprove(businessId) {
  const response = (
    await database.ref(`directorio-armenia/TO_APPROVE/${businessId}`).once("value")
  ).val();

  if (!response) throw new Error("Business not found");

  return response;
}

async function approveBusiness(business) {
  const newBusiness = {
    ...business,
    created_at: new Date(business.created_at).toISOString(),
    approved_at: new Date().toISOString(),
  };

  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/businesses-by-category/${category}/${business.slug}`)
        .set(newBusiness);
    }),
  );

  await database
    .ref(`directorio-armenia/businesses-by-slug/${business.slug}`)
    .set(newBusiness);

  await database.ref(`directorio-armenia/TO_APPROVE/${business.slug}`).set(null);

  return true;
}

setTimeout(async () => {
  try {
    const businessToApprove = await getBusinessToApprove("el-punto-del-cereal");
    await approveBusiness(businessToApprove);

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
