import { gql } from "apollo-server"; //will create a schema

const typesDefs = gql`

type Query {
    getBooks: [Book]
    getBook(id: ID!): Book
  }
  

type Book{
    title: String
    author: String
  }
  
`

export default typesDefs;