import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import prisma from "./prisma";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();
app.set("port", process.env.PORT || "4000");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
});

server.applyMiddleware({ app });

export default app;
