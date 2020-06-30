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

    switch (req.method) {
      case "GET":
        await GET_Handler(database, req.query.category, res);
        break;

      case "POST":
        await POST_Handler(database, req.body, res);
        break;

      default:
        res.status(404).send("Method not allowed");
        break;
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false });
  }
}

async function GET_Handler(database, category, res) {
  const response = (await database.ref(`business/${category}`).once("value")).val();

  res.status(200).send(Object.values(response || {}));
}

async function POST_Handler(database, body, res) {
  await database.ref("TO_APPROVE").push({
    ...body,
    facebook: body.facebook.toLowerCase(),
    instagram: body.instagram.toLowerCase(),
    logo: "",
    category: "",
    created_at: Date.now(),
  });

  res.status(200).json({ success: true });
}
