"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = void 0;
const firebase_1 = require("../firebase");
const getBooks = async () => {
    const querySnapshot = await firebase_1.db.collection("books").get();
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