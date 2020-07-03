const { argv } = require("yargs");
const database = require("./database-connection");

async function getBusinessToApprove(businessId) {
  const response = (
    await database.ref(`directorio-armenia/TO_APPROVE/${businessId}`).once("value")
  ).val();

  return response || {};
}

async function approveBusiness(business) {
  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/business/${category}/${business.slug}`)
        .set({
          ...business,
          created_at: new Date(business.created_at).toISOString(),
          approved_at: new Date().toISOString(),
        });
    }),
  );

  await Promise.all(
    business.categories.map(category => {
      return database
        .ref(`directorio-armenia/categories/${category}/total_business`)
        .transaction(categoryData => {
          if (categoryData) {
            return { ...categoryData, total_business: categoryData.total_business + 1 };
          }

          return categoryData;
        });
    }),
  );

  return true;
}

setTimeout(async () => {
  try {
    const businessToApprove = await getBusinessToApprove(argv.id);
    await approveBusiness(businessToApprove);

    process.exit();
  } catch (e) {
    console.log(e);
  }
}, 1000);
