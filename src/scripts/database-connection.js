require("dotenv").config();
require("firebase/database");

const firebase = require("firebase/app");

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(FIREBASE_CONFIG);
const database = firebase.database();

module.exports = database;
