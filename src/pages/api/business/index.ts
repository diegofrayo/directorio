import firebase from "firebase/app";
import("firebase/database");

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

if (firebase.apps.length === 0) firebase.initializeApp(FIREBASE_CONFIG);

export default async function BusinessController(
  req: { body: Record<string, unknown> },
  res: { statusCode: number; json: any },
): Promise<any> {
  try {
    const database = firebase.database();
    await database.ref("business").push({
      ...req.body,
      picture: "",
      created_at: new Date().toISOString(),
      approved: false,
    });

    res.statusCode = 200;
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.json({ success: false });
  }
}
