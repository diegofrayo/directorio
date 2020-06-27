const argv = require("yargs").argv;
const database = require("./database-connection");

async function getBusinessToApprove(businessId) {
  const response = (await database.ref(`TO_APPROVE/${businessId}`).once("value")).val();
  return response || {};
}

async function approveBusiness(business) {
  if (!business.category) {
    console.log("Business not found");
    return false;
  }

  const response = await database.ref(`business/${business.category}`).push({
    ...business,
    approved_at: new Date().toISOString(),
  });

  return response;
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
