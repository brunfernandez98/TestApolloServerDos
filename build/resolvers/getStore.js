"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStores = void 0;
const firebaseAdmin_1 = require("../firebaseAdmin");
const getStores = async () => {
    const querySnapshot = await firebaseAdmin_1.db.collection("store").get();
    const store = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            name: doc.data().name
        };
    });
    return store;
};
exports.getStores = getStores;
//# sourceMappingURL=getStore.js.map