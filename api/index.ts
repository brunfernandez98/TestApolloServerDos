import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";
import http from "http";

async function startApolloServer (schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const corsOptions = {
    origin: ["https://www.your-app.example", "https://studio.apollographql.com"]
  };
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.

  server.applyMiddleware({ path: "/graphql", app, cors: corsOptions });
  
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`Server sat http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(typeDefs, resolvers)