"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server"); //will create a schema
const typesDefs = (0, apollo_server_1.gql) `

type Query {
    getBooks: [Book]
    getBook(id: ID!): Book
  }
  

type Book{
    title: String
    author: String
  }
  
`;
exports.default = typesDefs;
//# sourceMappingURL=typeDefs.js.map