require("dotenv").config();
require("firebase/database");

const firebase = require("firebase/app");
const { CATEGORIES } = require("../data");

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(FIREBASE_CONFIG);
const database = firebase.database();

Object.values(CATEGORIES).forEach(category => {
  for (let i = 0; i < category.total * 2; i++) {
    database.ref("business").push({
      approved: i % 2 === 0,
      category: category.slug,
      created_at: new Date().toISOString(),
      description: "Descripcion del negocio...",
      facebook: i % 3 === 0 ? "mi_negocio_xyz" : "",
      instagram: "mi_negocio_xyz",
      logo: "",
      name: `Mi negocio XY${i}`,
      whatsapp: "3113728898",
    });
  }
});

setTimeout(() => {
  process.exit();
}, 5000);
