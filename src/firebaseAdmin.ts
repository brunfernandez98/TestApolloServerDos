import admin from 'firebase-admin';

const serviceAccount = require('./serviceAccount.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();

export default app;
