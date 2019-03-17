export const users = async (root, args, { prisma }) =>
  await prisma.query.users();

export const signup = async (root, { data }, { prisma }, info) => {
  return await prisma.mutation.createUser({ data }, info);
};
