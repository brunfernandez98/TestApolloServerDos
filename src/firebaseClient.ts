import { initializeApp } from 'firebase/app'


const serviceAccount = require('./serviceAccount.json');

const app = initializeApp(serviceAccount)

export default app;