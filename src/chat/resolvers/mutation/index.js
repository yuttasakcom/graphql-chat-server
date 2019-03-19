const dateTime = new Date().toISOString();

export default {
  Mutation: {
    createChatRoom: async (parent, { data }, { prisma }, info) => {
      data.createdAt = dateTime;
      data.updatedAt = dateTime;

      data.owners = {
        connect: {
          id: data.owners,
        },
      };

      data.members = data.owners;

      return await prisma.mutation.createChatRoom({ data }, info);
    },
    createChatMessage: async (parent, { data }, { prisma, pubsub }, info) => {
      data.createdAt = dateTime;
      data.updatedAt = dateTime;
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
};
