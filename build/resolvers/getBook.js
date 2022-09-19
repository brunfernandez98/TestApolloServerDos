"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = void 0;
const firebaseAdmin_1 = require("../firebaseAdmin");
const getBooks = async () => {
    const querySnapshot = await firebaseAdmin_1.db.collection("books").get();
    const books = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    return books;
};
exports.getBooks = getBooks;
//# sourceMappingURL=getBook.js.map