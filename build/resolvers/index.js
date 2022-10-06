"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStore_1 = require("./getStore");
const resolvers = {
    Query: {
        getStores: () => (0, getStore_1.getStores)()
    }
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map