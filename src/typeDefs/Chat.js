import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    chatRooms(
      query: String
      first: Int
      skip: Int
      after: String
      orderBy: ChatRoomOrderByInput
    ): [ChatRoom!]!
  }

  enum ChatRoomOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
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
