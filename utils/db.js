const admin = require("firebase-admin");
const serviceAccount = require("../credentials.json");

if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } catch (error) {
      console.log(error);
    }
  }

const db = admin.firestore();
export { db }