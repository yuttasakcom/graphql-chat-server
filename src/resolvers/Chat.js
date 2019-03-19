import { withFilter } from "apollo-server-express";

export default {
  Query: {
    chatRooms: async (parent, args, { prisma }, info) => {
      const opArgs = {
        first: args.first,
        skip: args.skip,
        after: args.after,
        orderBy: args.orderBy,
      };

      return await prisma.query.chatRooms(opArgs, info);
    },
    chats: async (parent, args, { prisma }, info) => {
      const opArgs = {
        first: args.first,
        skip: args.skip,
        after: args.after,
        orderBy: args.orderBy,
      };
      return await prisma.query.chatMessages(opArgs, info);
    },
  },
  Mutation: {
    createChatRoom: async (parent, { data }, { prisma }, info) => {
      data.owners = {
        connect: {
          id: data.owners,
        },
      };

      data.members = data.owners;

      return await prisma.mutation.createChatRoom({ data }, info);
    },
    createChatMessage: async (parent, { data }, { prisma, pubsub }, info) => {
      data.sender = {
        connect: {
          id: data.sender,
        },
      };
      data.chatRoom = {
        connect: {
          id: data.chatRoom,
        },
      };
      const message = await prisma.mutation.createChatMessage({ data }, info);
      pubsub.publish("chatCreated", message);
      return message;
    },
  },
  Subscription: {
    chatCreated: {
      subscribe: withFilter(
        (parent, args, { pubsub }) => pubsub.asyncIterator("chatCreated"),
        (payload, args) => payload.chatRoom.id === args.chatRoom
      ),
      resolve: payload => payload,
    },
  },
};
