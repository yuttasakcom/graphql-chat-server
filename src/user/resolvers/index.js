import hashPassword from "../../utils/hashPassword";

export default {
  Query: {
    users: async (parent, args, { prisma }) => await prisma.query.users(),
  },
  Mutation: {
    signup: async (parent, { data }, { prisma }, info) => {
      const dateTime = new Date().toISOString();
      data.createdAt = dateTime;
      data.updatedAt = dateTime;
      data.role = "USER";
      data.status = "ENABLE";
      data.password = await hashPassword(data.password);
      return await prisma.mutation.createUser({ data }, info);
    },
  },
};
