"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const serviceAccount = require('./serviceAccount.json');
const app = (0, app_1.initializeApp)(serviceAccount);
exports.default = app;
//# sourceMappingURL=firebaseClient.js.map