import { gql } from "apollo-server-express";

import User from "./User";
import Role from "./Role";

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

export default [baseTypeDefs, User, Role];
