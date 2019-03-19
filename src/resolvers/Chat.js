export default {
  Query: {
    chatRooms: async (root, args, { prisma }, info) => {
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
    createChatRoom: async (root, { data }, { prisma }, info) => {
      data.owners = {
        connect: {
          id: data.owners,
        },
      };

      data.members = data.owners;

      return await prisma.mutation.createChatRoom({ data }, info);
    },
    createChatMessage: async (root, { data }, { prisma }, info) => {
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
      return await prisma.mutation.createChatMessage({ data }, info);
    },
  },
};
