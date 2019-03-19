import { withFilter } from "apollo-server-express";

export default {
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
