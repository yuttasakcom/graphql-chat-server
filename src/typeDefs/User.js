import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    signup(data: SignUpInput!): User!
  }

  type User {
    id: ID!
    username: String!
  }

  input SignUpInput {
    username: String!
  }
`;
