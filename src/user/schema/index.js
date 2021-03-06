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
    name: String!
    email: String!
    password: String
    role: Role!
    status: UserStatus!
    createdAt: String!
    updatedAt: String!
    chatRoomOwners: [ChatRoom]
    chatRoomMembers: [ChatRoom]
    chats: [ChatMessage]
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }

  enum UserStatus {
    ENABLE
    DISABLE
  }

  enum Role {
    USER
    ADMIN
  }
`;
