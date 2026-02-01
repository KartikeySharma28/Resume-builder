const User = require('../models/userModel');

class UserService {
  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ email }).select('email');
      return user;
    } catch (error) {
      throw new Error('Error fetching user: ' + error.message);
    }
  }
}

module.exports = new UserService();
