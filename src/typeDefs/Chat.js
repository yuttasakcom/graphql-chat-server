import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    chatRooms: [ChatRoom!]!
  }

  extend type Mutation {
    createChatRoom(data: CreateChatRoomInput!): ChatRoom!
  }

  input CreateChatRoomInput {
    name: String!
    owners: ID!
  }

  type ChatRoom {
    id: ID!
    name: String!
    owners: [User!]!
  }
`;
