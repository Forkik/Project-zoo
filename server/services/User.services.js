const { User } = require("../db/models");

class UserService {
  static getUser = async (email) => {
    const users = await User.findOne({ where: { email } });
    if (user) {
      return user;
    }
    return null
  };

  static createUser = async ({ name, email, password }) => {
    let user
    user = await User.findOne({ where: { email } });
    if (!user) {
        user = await User.create({ name, email, password });
      return user;
    }
    return null;
  };
}

module.exports = UserService;