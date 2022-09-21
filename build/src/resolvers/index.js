"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBook_1 = require("./getBook");
const resolvers = {
    Query: {
        getBooks: () => (0, getBook_1.getBooks)()
    }
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map