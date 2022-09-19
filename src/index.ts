import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";






// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  introspection: true,
  context: ({ req, res }:any) => {
    return {
      user: req,
      req,
    };
},

  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
  **/
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }: any) => {
  console.log(`🚀 onss  Server ready at ${url}`);
});