"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount_json_1 = __importDefault(require("./serviceAccount.json"));
const app = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(JSON.parse(JSON.stringify(serviceAccount_json_1.default))),
});
exports.db = firebase_admin_1.default.firestore();
exports.default = app;
//# sourceMappingURL=firebaseAdmin.js.map