export const users = async (root, args, { prisma }) =>
  await prisma.query.users();

export const createUser = async (root, { data }, { prisma }, info) => {
  data.role = "USER";
  data.createdAt = new Date().toISOString();
  data.updatedAt = new Date().toISOString();

  const user = await prisma.mutation.createUser({ data }, info);

  return user;
};
