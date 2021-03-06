import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "./resolvers";
import typeDefs from "./typeDefs";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer;
