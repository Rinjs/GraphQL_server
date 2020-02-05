import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => users.find(user => user.id == id),
    users: (parent, args, context, info) => users
  },
  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = { id, name, email, age };

      users.push(newUser);

      return newUser;
    },
    updateUser: (parent, newDate, context, info) => {
      let newUser = users.find(user => user.id == newDate.id);

      newUser.name = newDate.name;
      newUser.email = newDate.email;
      newUser.age = newDate.age;

      return newUser;
    },
    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex(user => user.id == id);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    }
  }
};

export default resolvers;
