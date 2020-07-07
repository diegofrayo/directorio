import "firebase/database";
import firebase from "firebase/app";

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default firebase.database();
