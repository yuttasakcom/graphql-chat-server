import { gql } from "apollo-server-express";

import User from "./User";
import Role from "./Role";
import Chat from "./Chat";

const baseTypeDefs = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [baseTypeDefs, User, Role, Chat];
