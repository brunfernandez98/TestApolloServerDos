"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server"); //will create a schema
const typesDefs = (0, apollo_server_1.gql) `

type Query {
    getStores: [Store]
    getStore(id: ID!): Store
  }
  

type Store{
      id: ID!
      name: String!
  }
  
`;
exports.default = typesDefs;
//# sourceMappingURL=typeDefs.js.map