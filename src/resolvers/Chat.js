export default {
  Query: {
    chatRooms: async (root, args, { prisma }, info) => {
      const opArgs = {
        first: args.first,
        skip: args.skip,
        after: args.after,
        orderBy: args.orderBy
      };

      return await prisma.query.chatRooms(opArgs, info);
    }
  },
  Mutation: {
    createChatRoom: async (root, { data }, { prisma }, info) => {
      data.owners = {
        connect: {
          id: data.owners
        }
      };
      return await prisma.mutation.createChatRoom({ data }, info);
    }
  }
};
