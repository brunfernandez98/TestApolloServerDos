import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const startApolloServer = async(app: any, httpServer: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer(app, httpServer).then(() => {
  httpServer.listen({ port: 4000,path:"/grapqhl" }, () => {
    console.log(`🚀 Server fdsf reasddy at http://localhost:4000`);
  });
});

export default httpServer;