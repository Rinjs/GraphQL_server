import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => users.find(user => user.id == id),
    users: (parent, args, context, info) => users
  }
};

export default resolvers;
