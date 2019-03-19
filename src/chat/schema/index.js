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

    chats: [ChatMessage!]!
  }

  extend type Mutation {
    createChatRoom(data: CreateChatRoomInput!): ChatRoom!
    createChatMessage(data: CreateChatMessageInput!): ChatMessage!
  }

  extend type Subscription {
    chatCreated(chatRoom: ID!): ChatMessage
  }

  input CreateChatRoomInput {
    name: String!
    owners: ID!
  }

  type ChatRoom {
    id: ID!
    name: String!
    owners: User!
    members: [User]
    createdAt: String!
    updatedAt: String!
  }

  type ChatMessage {
    id: ID!
    text: String!
    sender: User!
    chatRoom: ChatRoom!
    createdAt: String!
    updatedAt: String!
  }

  enum ChatRoomOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  enum ChatMessageOrderByInput {
    id_ASC
    id_DESC
    text_ASC
    text_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  input CreateChatMessageInput {
    text: String!
    sender: ID!
    chatRoom: ID!
  }
`;