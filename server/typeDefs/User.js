import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: Role!
    createdAt: String!
    updatedAt: String!
  }

  enum Role {
    USER
    ADMIN
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }
`;
