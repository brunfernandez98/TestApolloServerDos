"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const apollo_server_core_1 = require("apollo-server-core");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs_1 = __importDefault(require("./schema/typeDefs"));
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    context: ({ req, res }) => {
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
        (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true }),
    ],
});
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`asdsf Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map