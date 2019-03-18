export default {
  Query: {
    chatRooms: async (root, args, { prisma }) => {
      return await prisma.query.chatRooms();
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
