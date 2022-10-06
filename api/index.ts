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

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! This is the API server`);
});

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
    console.log(`🚀 Server rsddy at http://localhost:4000`);
  });
});

export default httpServer;