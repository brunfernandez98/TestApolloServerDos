import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

const app = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
});

export const db = admin.firestore();


export default app;
