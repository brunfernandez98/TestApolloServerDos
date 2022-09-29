import { gql } from "apollo-server"; //will create a schema

const typesDefs = gql`

type Query {
    getStores: [Store]
    getStore(id: ID!): Store
  }
  

type Store{
      id: ID!
      name: String!
  }
  
`

export default typesDefs;