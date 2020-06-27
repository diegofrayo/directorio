import { NextApiRequest, NextApiResponse } from "next";
import firebase from "firebase/app";
import "firebase/database";

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default async function BusinessController(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  try {
    const database = firebase.database();

    await database.ref("business").push({
      ...req.body,
      facebook: req.body.facebook.toLowerCase(),
      instagram: req.body.instagram.toLowerCase(),
      logo: "/static/images/logos/example.png",
      created_at: new Date().toISOString(),
      approved: false,
    });

    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
}
