import http from "http";
import express from "express";
import { ApolloServer, PubSub } from "apollo-server-express";

import prisma from "./prisma";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();
app.set("port", process.env.PORT || "4000");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
    pubsub,
  },
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export default httpServer;
