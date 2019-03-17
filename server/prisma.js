import { Prisma } from "prisma-binding";

export default new Prisma({
  typeDefs: "server/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT
});
