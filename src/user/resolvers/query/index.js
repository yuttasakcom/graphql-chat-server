export default {
  Query: {
    users: async (parent, args, { prisma }) => await prisma.query.users(),
  },
  User: {
    password: () => null,
  },
};
