import { gql } from "apollo-server-express";

export default gql`
  type ChatRoom {
    id: ID!
    name: String!
    chats: [Chat!]!
    owners: [User!]!
    members: [User!]!
    type: ChatRoomType!
    image: String
    createdAt: String!
    updatedAt: String!
  }

  type Chat {
    id: ID!
    sender: User!
    message: String!
    room: ChatRoom!
    createdAt: String!
    updatedAt: String!
  }

  enum ChatRoomType {
    PRIVATE
    GROUP
  }
`;
