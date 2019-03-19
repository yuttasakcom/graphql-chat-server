import opArgs from "../../../utils/opArgs";

export default {
  Query: {
    chatRooms: async (parent, args, { prisma }, info) =>
      await prisma.query.chatRooms(opArgs(args), info),
    chats: async (parent, args, { prisma }, info) =>
      await prisma.query.chatMessages(opArgs(args), info),
  },
};
